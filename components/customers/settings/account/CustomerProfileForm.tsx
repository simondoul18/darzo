"use client"
import { useState, useEffect } from "react";
import Select from 'react-select'
import Link from "next/link"
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useSession } from "next-auth/react"
import ToastService from "@/services/toast/ToastService";
import { AxiosResponse } from "axios";
import ButtonMain from "@/components/global/buttons/ButtonMain";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import CustomerProfileInterface from "@/interfaces/CustomerProfile/CustomerProfileInterface";
import CustomerProfileService from "@/services/fetch/CustomerProfile/CustomerProfileService";
export default function CustomerProfileForm(props: { user: object | null }) {
    let toast = new ToastService;
    let [loaderRequest, setLoaderRequest]: any = useState(false);
    const [selectedOption, setSelectedOption] = useState<any>(null);
    const options = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
    ];

    const { data: session } = useSession()

    const profileValidations: any = Yup.object().shape({
        name: Yup.string().required('Name is required.'),
        email: Yup.string().email('Email is invalid').required('Email is required.'),
        phone: Yup.string().required('Phone is required.'),
        gender: Yup.string().required('Gender is required.'),
        bio: Yup.string(),
        address: Yup.object().shape({
            address: Yup.string(),
            country: Yup.string(),
            state: Yup.string(),
            city: Yup.string(),
            postalCode: Yup.string(),
        }),
        // @ts-ignore
        id: Yup.number().default(session?.user?.id),
    });
    const profileParams = { resolver: yupResolver(profileValidations) };
    const { register, control, handleSubmit, formState, setValue } = useForm(profileParams);
    const { errors } = formState;

    useEffect(() => {
        setUserValues(props?.user)
    }, [props]);

    function setUserValues(user: any | null) {
        if (user) {
            setValue('name', user?.name || '');
            setValue('email', user?.email || '');
            setValue('phone', user?.customer?.phone || '');
            setValue('gender', user?.customer?.gender || '');
            setValue('bio', user?.customer?.bio || '');
            setSelectedOption({ value: user?.customer?.gender, label: user?.customer?.gender });
            //address
            setValue('address.address', user?.address?.address_line_1 || '');
            setValue('address.country', user?.address?.country_id || '');
            setValue('address.state', user?.address?.region || '');
            setValue('address.city', user?.address?.city || '');
            setValue('address.postalCode', user?.address?.zip || '');
        }
    }
    function updateProfile(e: any) {
        setLoaderRequest(true);
        toast.inprogress('update_profile', 'Updating profile!');
        let profileService = new CustomerProfileService;

        profileService.update(e).then((response: AxiosResponse<OriginResponse<CustomerProfileInterface>>) => {
            // console.log(response.data);
            setLoaderRequest(false);
            toast.update('update_profile', 'Profile updated successsfully.', 'success', false);
            // router.push('/products/designer/' + response.data.data?.uuid);
        });
    }


    return (
        <form onSubmit={handleSubmit(updateProfile)}>
            <h6 className="user-title">General Information</h6>
            <div className="general-info">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">Name<span className="text-danger">*</span></label>
                            <input {...register('name')} type="text" className="form-control" placeholder="Enter your full name" />
                            {/* @ts-ignore */}
                            <div className="text-red-500 text-sm mt-1">{errors?.name?.message}</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">Email<span className="text-danger">*</span></label>
                            <input {...register('email')} type="email" className="form-control" placeholder="Enter Email Address" />
                            {/* @ts-ignore */}
                            <div className="text-red-500 text-sm mt-1">{errors?.email?.message}</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">Mobile Number<span className="text-danger">*</span></label>
                            <input {...register('phone')} type="text" className="form-control" placeholder="Enter Mobile Number" />
                            {/* @ts-ignore */}
                            <div className="text-red-500 text-sm mt-1">{errors?.phone?.message}</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">Gender<span className="text-danger">*</span></label>
                            <Controller
                                control={control}
                                name="gender"
                                render={({ field }) => (
                                    <Select
                                        className="select"
                                        placeholder="Select Gender"
                                        value={selectedOption}
                                        onChange={(option) => {
                                            setSelectedOption(option);
                                            field.onChange(option.value);
                                        }}
                                        options={options}
                                    />
                                )}
                            />
                            {/* @ts-ignore */}
                            <div className="text-red-500 text-sm mt-1">{errors?.gender?.message}</div>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">Date of birth</label>
                            <div className="form-icon">
                                <input type="text" className="form-control datetimepicker" placeholder="DD/MM/YYYY" />
                                <span className="cus-icon"><i className="feather-calendar" /></span>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="col-form-label d-block">Your Bio <span className="brief-bio float-end">Brief description for your profile. URLs are hyperlinked.</span></label>
                            <textarea {...register('bio')} className="form-control" rows={5} placeholder="Add a Short Bio....." defaultValue={""} />
                        </div>
                    </div>
                </div>
            </div>
            <h6 className="user-title">Address </h6>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="col-form-label">Address</label>
                        <input {...register('address.address')} type="text" className="form-control" placeholder="Enter your address" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="col-form-label">Country</label>
                        <input {...register('address.country')} type="text" className="form-control" placeholder="Enter your state" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="col-form-label">State</label>
                        <input {...register('address.state')} type="text" className="form-control" placeholder="Enter your state" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="col-form-label">City</label>
                        <input {...register('address.city')} type="text" className="form-control" placeholder="Enter your city" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="col-form-label">Postal Code</label>
                        <input {...register('address.postalCode')} type="text" className="form-control" placeholder="Enter your postal code" />
                    </div>
                </div>
            </div>
            <div className="acc-submit">
                <Link href="/" className="btn btn-secondary">Cancel</Link>
                <ButtonMain text="Update Profile" scheme="btn-primary float-end" showLoaderOnRequest={loaderRequest} />
            </div>
        </form>
    )
}