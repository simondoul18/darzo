
"use client";
import ButtonMain from "@/components/global/buttons/ButtonMain";
import CheckboxMain from "@/components/global/inputs/CheckboxMain";
import InputMain from "@/components/global/inputs/InputMain";
import SelectMain from "@/components/global/inputs/SelectMain";
import TextEditor from "@/components/global/inputs/TextEditor";
import ProductDesignerSectionWrapper from "@/components/products/designer/ProductDesignerSectionWrapper";
import CategoriesService from "@/services/fetch/Categories/CategoryService";
import TagsService from "@/services/fetch/Tags/TagService";
import SelectInputInterface from "@/interfaces/SelectInput/SelectInputInterface";
import TagsInterface from "@/interfaces/Tags/TagInterface";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Plus, X } from "react-feather";
import UnitService from "@/services/fetch/Units/UnitService";
import UnitInterface from "@/interfaces/Units/UnitInterface";
import CurrencyService from "@/services/fetch/Currencies/CurrencyService";
import CurrencyInterface from "@/interfaces/Currencies/CurrencyInterface";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import TemporaryMediaService from "@/services/fetch/TemporaryMediaUpload/TemporaryMediaService";
import ImageUploaderBox from "@/components/global/Uploader/ImageUploaderBox";
import ImageBoxPlaceholder from "@/components/global/Placeholders/ImageBoxPlaceholder";
import TemporaryMediaInterface from "@/interfaces/TempporaryMedia/TemporaryMediaInterface";
import MediaService from "@/services/MediaService/MediaService";
import ProductService from "@/services/fetch/Products/ProductService";
import { useRouter, useParams } from "next/navigation";
import ProductInterface from "@/interfaces/Products/ProductInterface";
import BackNavigation from "@/components/global/BackNavigation/BackNavigation";
import ToastService from "@/services/toast/ToastService";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import CategoryInterface from "@/interfaces/Categories/CategoryInterface";
import Skeleton from "react-loading-skeleton";

export default function ProductDesignerPage() {

    let router = useRouter();
    const params = useParams();
    let toast = new ToastService;

    let [product, setProduct]: any = useState(null);
    let [isProductBeingUpdated, setIsProductBeingUpdated] = useState<boolean>(false);

    useEffect(() => {
        getCategories('');
        getTags('');
        getUnits('');
        getCurrencies('');

        if (params && Object.keys(params).length > 0) {
            fetchProduct(params.params[0]);
        } else {
            setIsProductBeingUpdated(false);
        }

    }, []);

    let productForm: any = Yup.object().shape({
        name: Yup.string().required("Producut name is required"),
        description: Yup.string(),
        categories: Yup.array(
            Yup.object().shape({
                id: Yup.number().nullable()
            })
        ).min(1, 'You need to select atleast one category').required("You need to select atleast one category"),
        quantity: Yup.number().nullable(),
        sku: Yup.string().nullable(),
        attributes: Yup.object({
            color: Yup.string().required("Color is required"),
            weight: Yup.string().required("Product weight is required"),
        }),
        tags: Yup.array(
            Yup.object().shape({
                id: Yup.number().nullable()
            })
        ).min(1, 'You need to select atleast one tag').required("You need to select atleast one tag"),
        sell_on_crm: Yup.boolean().default(false),
        sell_on_marketplace: Yup.boolean().default(true),
        price: Yup.number().required("Product price is required"),
        currency_id: Yup.number().required("Price currency is required"),
        images: Yup.array(
            Yup.object().shape({
                url: Yup.string(),
                name: Yup.string()
            })
        ).min(1, "Atleast one image is required").required('Atleast one image is required'),
    });

    const productParams = { resolver: yupResolver(productForm) };
    const { register, handleSubmit, formState, setValue, control } = useForm<any>(productParams);
    const { errors } = formState;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'custom_attributes'
    });

    let [images, setImages] = useState<TemporaryMediaInterface[] | any[]>([]);


    let [categoriesOption, setCategoriesOption]: any = useState();
    let [tagsOption, setTagsOption]: any = useState();
    let [unitsOption, setUnitsOption]: any = useState();
    let [currenciesOption, setCurrenciesOption]: any = useState();
    let [imageUploadRequest, setImageUploadRequest]: any = useState(false);
    let [categories, setCategories]: any = useState([]);
    let [tags, setTags]: any = useState([]);
    let [description, setDescription]: any = useState('');
    let [priceCurrency, setPriceCurrency]: any = useState('');
    let [productLoaderRequest, setProductLoaderRequest]: any = useState(false);

    function getCategories(search: string) {
        let categoryService = new CategoriesService;
        categoryService.categories(search).then((response: AxiosResponse<OriginResponse<CategoryInterface[]>>) => {
            let options = response.data.data?.map((x: any) => {
                return { label: x.name, value: x.id };
            });
            setCategoriesOption(options);
        });

        return categoriesOption;
    }


    function getTags(search: string) {
        let tagsService = new TagsService;
        tagsService.tags(search).then((response: AxiosResponse<OriginResponse<TagsInterface[]>>) => {
            let options = response.data.data?.map((x: TagsInterface) => {
                return { label: x.name, value: x.id };
            });
            setTagsOption(options);
        });

        return tagsOption;
    }

    function getUnits(search: string) {
        let unitService = new UnitService;
        unitService.units(search).then((response: AxiosResponse<OriginResponse<UnitInterface[]>>) => {
            let options = response.data.data?.map((x: UnitInterface) => {
                return { label: x.name + ' (' + x.unit + ')', value: x.id };
            });
            setUnitsOption(options);
        });

        return unitsOption;
    }

    function getCurrencies(search: string) {
        let currencyService = new CurrencyService;
        currencyService.currencies(search).then((response: AxiosResponse<OriginResponse<CurrencyInterface[]>>) => {
            let options = response.data.data?.map((x: CurrencyInterface) => {
                return { label: x.name, value: x.id };
            });
            setCurrenciesOption(options);
        });

        return currenciesOption;
    }

    const categoriesOptionsPromise = (inputValue: string) =>
        new Promise<SelectInputInterface[]>((resolve) => {
            resolve(getCategories(inputValue));
        });

    const tagsOptionsPromise = (inputValue: string) =>
        new Promise<SelectInputInterface[]>((resolve) => {
            resolve(getTags(inputValue));
        });

    const unitsOptionsPromise = (inputValue: string) =>
        new Promise<SelectInputInterface[]>((resolve) => {
            resolve(getUnits(inputValue));
        });

    const currenciesOptionsPromise = (inputValue: string) =>
        new Promise<SelectInputInterface[]>((resolve) => {
            resolve(getCurrencies(inputValue));
        });

    function handleProductRequest(e: any) {
        setProductLoaderRequest(true);

        if (!product) {
            addProduct(e);
        } else {
            updateProduct(e);
        }
    }

    function uploadSelectedImage(event: React.ChangeEvent<HTMLInputElement>) {
        let mediaService = new MediaService;
        if (event.target.files && event.target.files.length > 0 && mediaService.onlyImages(event.target.files[0])) {
            setImageUploadRequest(true);
            let tempMediaService = new TemporaryMediaService;
            tempMediaService.postMedia(event.target.files).then((response: AxiosResponse<OriginResponse<TemporaryMediaInterface[] | any[]>>) => {
                setImages([...images, response.data?.data]);
                setValue('images', [...images, response.data.data]);
                setImageUploadRequest(false);
            }).catch((err: any) => {
                setImageUploadRequest(false);
            })
        }
    }

    function removeImage(url: any) {
        let imageList = images.filter((image: TemporaryMediaInterface) => {
            return image.url != url;
        });
        setImages(imageList);
        setValue('images', imageList);
    }

    function categoryChangeHandler(event: SelectInputInterface[]) {
        setCategories(event);
        setValue('categories', event);
    }

    function tagsChangeHandler(event: SelectInputInterface[]) {
        setTags(event);
        setValue('tags', event);
    }

    function priceCurrencyChangeHandler(event: SelectInputInterface) {
        setPriceCurrency(event);
        setValue('currency_id', event.value);
    }

    function descriptionChangeHandler(event: string) {
        setDescription(event);
        setValue('description', event);
    }

    function addMoreAttributes() {
        append({
            name: '',
            value: ''
        });
    }

    function removeCustomAttribute(index: any) {
        remove(index);
    }

    function fetchProduct(routeParam: string) {
        setIsProductBeingUpdated(true);
        let productService = new ProductService;
        productService.fetch(routeParam, { 'include': 'categories,attributes,currency,custom_attributes,tags,images' }).then((response: AxiosResponse<OriginResponse<ProductInterface>>) => {
            let product: ProductInterface | null = response.data.data ?? null;
            setProduct(product);
            setProductStates(product);

        })
    }

    function addProduct(e: any) {
        toast.inprogress('add_product', 'Adding product!');
        let productService = new ProductService;
        productService.create(e).then((response: AxiosResponse<OriginResponse<ProductInterface>>) => {
            toast.update('add_product', 'Product added successsfully.', 'success', false);
            router.push('/products/designer/' + response.data.data?.uuid);
        });
    }

    function updateProduct(e: any) {
        toast.inprogress('update_product', 'Updating product!');
        let productService = new ProductService;
        productService.update(e, product.uuid).then((response: AxiosResponse<OriginResponse<ProductInterface>>) => {
            setProductLoaderRequest(false);
            toast.update('update_product', 'Product updated successsfully.', 'success', false);
            // router.push('/products/designer/' + response.data.data?.uuid);
        });
    }

    function test() {

    }

    function setProductStates(product: ProductInterface | null) {
        if (product) {
            setValue('name', product.name);
            setValue('description', product.description);
            setDescription(product.description);
            setValue('categories', product.categories);
            setCategories(product.categories)
            setValue('quantity', product.quantity);
            setValue('sku', product.sku);
            setValue('attributes.color', product.attributes?.color);
            setValue('attributes.weight', product.attributes?.weight);
            setValue('custom_attributes', product.custom_attributes);
            setValue('tags', product.tags);
            setTags(product.tags)
            setValue('sell_on_crm', product.sell_on_crm);
            setValue('sell_on_marketplace', product.sell_on_marketplace);
            setValue('images', product.images);
            setImages(product.images);
            setValue('price', product.price);
            setValue('currency_id', product.currency_id);
            setPriceCurrency({
                label: product?.currency?.name,
                value: product?.currency?.id,
            });

        }

    }


    return (
        <div className="container flex flex-col">
            <BackNavigation title={isProductBeingUpdated ? "Update product" : "Add new product"} backText="Back to product list" />
            <form className="" onSubmit={handleSubmit(handleProductRequest)}>
                <div className="row !mt-11">
                    <div className="col-6 flex flex-col gap-8">
                        <ProductDesignerSectionWrapper heading={"Description"}>
                            {(isProductBeingUpdated && product) || (!isProductBeingUpdated && !product) ? <InputMain type="text" placeholder="Enter prodct name" label="Product name" classNames="font-bold" register={register('name')} error={errors.name} /> : <Skeleton className="h-6" />}

                            {(isProductBeingUpdated && product) || (!isProductBeingUpdated && !product) ? <TextEditor label="Product description" editorValue={description} changeHandler={descriptionChangeHandler} /> : <Skeleton className="h-52" />}
                        </ProductDesignerSectionWrapper>

                        <ProductDesignerSectionWrapper heading={"Category"}>
                            {(isProductBeingUpdated && product) || (!isProductBeingUpdated && !product) ? <SelectMain options={categoriesOption} label="Product category" promise={categoriesOptionsPromise} isMulti={true} closeMenuOnSelect={false} changeHandler={categoryChangeHandler} error={errors?.categories} defaultValue={categories} /> : <Skeleton className="h-6" />}
                        </ProductDesignerSectionWrapper>


                        <ProductDesignerSectionWrapper heading={"Inventory"}>
                            <div className="row">
                                {
                                    (isProductBeingUpdated && product) || (!isProductBeingUpdated && !product) ? (
                                        <>
                                            <div className="col-4">
                                                <InputMain type="number" placeholder="0-10000" label="Quantity" register={register('quantity')} />
                                            </div>

                                            <div className="col-8">
                                                <InputMain type="text" placeholder="UGG-BB-PUR-06" label="SKU (Optional)" classNames="font-bold" register={register('sku')} />
                                            </div>
                                        </>
                                    )
                                        : <Skeleton className="h-6" />
                                }
                            </div>
                        </ProductDesignerSectionWrapper>

                        <ProductDesignerSectionWrapper heading={"Attributes"}>
                            {
                                (isProductBeingUpdated && product) || (!isProductBeingUpdated && !product) ? (
                                    <div className="row">
                                        <div className="col-4">
                                            {/* @ts-ignore */}
                                            <InputMain type="color" label="Product color" register={register('attributes.color')} error={errors?.attributes?.color?.message} />
                                        </div>

                                        <div className="col-8">
                                            {/* @ts-ignore */}
                                            <InputMain type="number" label="Product weight (KG)" register={register('attributes.weight')} error={errors?.attributes?.weight?.message} placeholder="12 Kg" />
                                        </div>

                                        {
                                            fields && fields.map((field, index) => {
                                                return (
                                                    <div className="col-12" key={index}>
                                                        <div className="row">
                                                            <div className="col-5">
                                                                <InputMain type="text" label="Attribute name" register={register(`custom_attributes.${index}.name`)} />
                                                            </div>

                                                            <div className="col-5">
                                                                <InputMain type="text" label="Attribute value" register={register(`custom_attributes.${index}.value`)} />
                                                            </div>

                                                            <div className="col-2 my-auto">
                                                                <X size={20} className="mt-3 cursor-pointer" onClick={() => {
                                                                    removeCustomAttribute(index);
                                                                }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                        <div className="col-12">
                                            <div className="flex text-blue-600 hover:underline cursor-pointer mt-3" onClick={() => addMoreAttributes()}><Plus size={12} className="my-auto" /> Add custom attributes</div>
                                        </div>
                                    </div>
                                ) :

                                    <Skeleton className="h-24" />
                            }
                        </ProductDesignerSectionWrapper>

                        <ProductDesignerSectionWrapper heading={"Tags"}>
                            {
                                (isProductBeingUpdated && product) || (!isProductBeingUpdated && !product) ? <SelectMain options={tagsOption} label="Product tags" promise={tagsOptionsPromise} isMulti={true} changeHandler={tagsChangeHandler} error={errors?.categories} defaultValue={tags} /> : <Skeleton className="h-6" />
                            }
                        </ProductDesignerSectionWrapper>

                        <ProductDesignerSectionWrapper heading={"Selling type"}>
                            <div className="row">
                                <div className="col-12">
                                    {(isProductBeingUpdated && product) || (!isProductBeingUpdated && !product) ? <CheckboxMain label="Sell on CRM" order="reverse" register={register('sell_on_crm')} /> : <Skeleton />}
                                </div>

                                <div className="col-12">
                                    {(isProductBeingUpdated && product) || (!isProductBeingUpdated && !product) ? <CheckboxMain label="Sell on marketplace" order="reverse" register={register('sell_on_marketplace')} /> : <Skeleton />}
                                </div>

                                <div className="col-12">
                                    {(isProductBeingUpdated && product) || (!isProductBeingUpdated && !product) ? <CheckboxMain label="Sell on both" order="reverse" /> : <Skeleton />}
                                </div>
                            </div>
                        </ProductDesignerSectionWrapper>

                        {/* <ProductDesignerSectionWrapper heading={"Variant"}>
                        <div className="row">
                            <div className="col-12 flex justify-between">
                                <div className="text-base font-bold text-gray-600">Product variants</div>
                                <div className="flex gap-1 text-blue-600 hover:underline cursor-pointer"><Plus size={16} className="my-auto" /> Add variant</div>
                            </div>
                        </div>
                    </ProductDesignerSectionWrapper> */}
                    </div>


                    <div className="col-6 flex flex-col gap-8">
                        <ProductDesignerSectionWrapper heading={"Product images"}>
                            <div className="flex flex-col">
                                <div className="flex flex-wrap gap-4">
                                    <ImageUploaderBox onChangeCallback={uploadSelectedImage} showUploaderSpinner={imageUploadRequest} />

                                    {images && images.map((image: TemporaryMediaInterface, index) => {
                                        return <ImageBoxPlaceholder url={image.url} key={index} removeImageFromIndex={() => { removeImage(image.url) }} />
                                    })
                                    }
                                </div>
                                {/* @ts-ignore */}
                                <div className="error text-red-500">{errors?.images?.message}</div>
                            </div>
                        </ProductDesignerSectionWrapper>

                        <ProductDesignerSectionWrapper heading={"Pricing"}>
                            {
                                (isProductBeingUpdated && product) || (!isProductBeingUpdated && !product) ? (
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="alert alert-info">Price of the variable product will be calculated on checkout!</div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-8">
                                                    <InputMain type="number" label="Price" placeholder="$ 230" register={register('price')} error={errors?.price} />
                                                </div>
                                                <div className="col-4">
                                                    <SelectMain options={currenciesOption} label="Currency" promise={currenciesOptionsPromise} closeMenuOnSelect={true} changeHandler={priceCurrencyChangeHandler} error={errors?.currency_id} defaultValue={priceCurrency} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : <Skeleton className="h-24" />
                            }
                        </ProductDesignerSectionWrapper>


                        <div className="row">
                            <div className="col-4">
                                {
                                    product && <ButtonMain text="Delete" scheme="btn-danger" />
                                }
                            </div>
                            <div className="col-8 justify-end flex gap-3">
                                <ButtonMain text="Schedule" scheme="btn-outline-primary" click={test} />
                                {
                                    !product && <ButtonMain text="Add Product" scheme="btn-primary" showLoaderOnRequest={productLoaderRequest} />
                                }

                                {
                                    product && <ButtonMain text="Update Product" scheme="btn-primary" showLoaderOnRequest={productLoaderRequest} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}