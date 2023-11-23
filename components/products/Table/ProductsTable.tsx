"use client";
import MuiTable from "@/components/global/MUI/Tables/MuiTable";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import PaginatedProductsInterface from "@/interfaces/Products/PaginatedProducts";
import ProductInterface from "@/interfaces/Products/ProductInterface";
import ProductService from "@/services/fetch/Products/ProductService";
import Checkbox from "@mui/joy/Checkbox";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function ProductsTable() {


    useEffect(() => {
        fetchProductsWithPagination();
    }, [])

    let router = useRouter();

    let [tableKeys, setTableKeys] = useState<any[]>(['name', 'price', 'color', 'weight', 'currency', 'sku']);
    let [tableRows, setTableRows] = useState<any[]>();
    let [paginatedProducts, setPaginatedProducts] = useState<PaginatedProductsInterface | null>(null);
    let [perPageRows, setPerPageRows] = useState<number>(25);
    let [currentPage, setCurrentPage] = useState<number>(1);
    const [selected, setSelected] = useState<any>([]);
    const [orderDirection, setOrderDirection] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');

    function fetchProductsWithPagination(page: number = 1, perPage: number = 10) {
        let productService = new ProductService;
        productService.fetchPaginatedProductsForProducer({
            "include": "categories,attributes,custom_attributes,images,tags,currency",
            "perPage": perPage,
            "page": page
        }).then((response: AxiosResponse<OriginResponse<PaginatedProductsInterface>>) => {
            let products: ProductInterface[] | undefined = response.data.data?.data;
            // setProducts(products);

            setTableRows(products ? products.map((product: ProductInterface, i: any) => {
                return {
                    uuid: product.uuid,
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    color: product.attributes?.color,
                    weight: product.attributes?.weight,
                    currency: product.currency?.name + " (" + product.currency?.symbol + ")",
                    sku: product.sku
                }
            }) : []);

            setPaginatedProducts(response.data.data ? response.data.data : null);
        })
    }

    function perPageRowsChangeHandler(e: any, newValue: any) {
        setPerPageRows(newValue);
        fetchProductsWithPagination(currentPage, newValue);
    }

    function pageChangeHandler(pageNo: number) {
        if (paginatedProducts?.last_page && pageNo <= paginatedProducts?.last_page) {
            setCurrentPage(pageNo);
            fetchProductsWithPagination(pageNo, perPageRows);
        }
    }

    function handleSelectAllRows(event: any) {
        if (event.target.checked) {
            const newSelected: any = tableRows ? tableRows.map((n) => n.id) : null;
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    }

    const handleClick = (event: any, name: any) => {
        const selectedIndex: any = selected.indexOf(name);
        let newSelected: any = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };



    const isSelected = (id: any) => selected?.indexOf(id) !== -1;

    function descendingComparator(a: any, b: any, orderBy: any) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator(order: any, orderBy: any) {
        return order === 'desc'
            ? (a: any, b: any) => descendingComparator(a, b, orderBy)
            : (a: any, b: any) => -descendingComparator(a, b, orderBy);
    }

    function stableSort(array: any, comparator: any) {
        const stabilizedThis = array.map((el: any, index: any) => [el, index]);
        stabilizedThis.sort((a: any, b: any) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });

        return stabilizedThis.map((el: any) => el[0]);
    }

    function handleRowsOrder(order: string, property: string) {
        setOrderDirection(order);
        setOrderBy(property);
    }

    function navigateToProductsPage(uuid: string) {
        router.push('/products/designer/' + uuid);
    }


    const headCells = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'Name',
        },
        {
            id: 'price',
            numeric: false,
            disablePadding: false,
            label: 'Price',
        },
        {
            id: 'color',
            numeric: false,
            disablePadding: false,
            label: 'Color',
        },
        {
            id: 'weight',
            numeric: false,
            disablePadding: false,
            label: 'Weight',
        },
        {
            id: 'currency',
            numeric: false,
            disablePadding: false,
            label: 'Currency',
        },
        {
            id: 'sku',
            numeric: false,
            disablePadding: false,
            label: 'SKU',
        },
    ];


    return (
        <MuiTable headCells={headCells}
            rows={tableRows}
            perPageRows={perPageRows}
            rowsPerPageValueChangeHandler={perPageRowsChangeHandler}
            pageChangeHandler={pageChangeHandler}
            currentPage={currentPage}
            paginationParams={paginatedProducts}
            selectedRows={selected}
            selectAllHandler={handleSelectAllRows}
            orderBy={orderBy}
            orderDirection={orderDirection}
            orderChangeHandler={handleRowsOrder}
            tableName="Products"
        >
            {tableRows ? stableSort(tableRows, getComparator(orderDirection, orderBy))
                .map((row: any, index: any) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                        <tr
                            onClick={() => navigateToProductsPage(row.uuid)}
                            key={index}
                            className="cursor-pointer"
                        >
                            <td scope="row">
                                <Checkbox
                                    checked={isItemSelected}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        handleClick(event, row.id);
                                    }}
                                />
                            </td>
                            <td id={labelId} className="" scope="row">
                                <div className="!w-96 truncate text-ellipsis">
                                    {row.name}
                                </div>
                            </td>

                            <td id={labelId} className="" scope="row">
                                {row.price}
                            </td>

                            <td id={labelId} className="" scope="row">
                                <div className="w-20 h-5 rounded" style={{
                                    backgroundColor: row.color
                                }}></div>
                            </td>

                            <td id={labelId} className="" scope="row">
                                {row.weight}
                            </td>

                            <td id={labelId} className="" scope="row">
                                {row.currency}
                            </td>

                            <td id={labelId} className="" scope="row">
                                {row.sku}
                            </td>
                        </tr>
                    );
                }) : [1, 2, 3].map((num: any) => {
                    return (
                        <tr key={num}>
                            <td>
                                <Skeleton />
                            </td>

                            <td>
                                <Skeleton />
                            </td>

                            <td>
                                <Skeleton />
                            </td>

                            <td>
                                <Skeleton />
                            </td>

                            <td>
                                <Skeleton />
                            </td>

                            <td>
                                <Skeleton />
                            </td>

                            <td>
                                <Skeleton />
                            </td>
                        </tr>
                    )
                })}
        </MuiTable>
    )
}