"use client"
import { useState, useEffect } from "react";
import UploadProfilePicture from "@/components/customers/settings/account/UploadProfilePicture";
import CustomerProfileForm from "@/components/customers/settings/account/CustomerProfileForm"
import { useSession } from "next-auth/react"
import { AxiosResponse } from "axios";
import CustomerProfileInterface from "@/interfaces/CustomerProfile/CustomerProfileInterface";
import CustomerProfileService from "@/services/fetch/CustomerProfile/CustomerProfileService";
import OriginResponse from "@/interfaces/Origin/OriginResponse";

export default function AccountSettings() {
    const { data: session, status } = useSession()
    let [user, setUser]: any = useState(null);
    useEffect(() => {
        // console.log("Here: ",status);
        if (status === "authenticated") {
            getUserProfile();
        }
    }, [status]);
    function getUserProfile() {
        let profileService = new CustomerProfileService;
        profileService.profile(user?.id).then((response: AxiosResponse<OriginResponse<CustomerProfileInterface>>) => {
            if (response.data.success) {
                setUser(response.data.data)
            }
        });
    }


    return (
        <>
            <div className="col-md-8 col-lg-9">
                <div className="widget-title">
                    <h4>Account Settings</h4>
                </div>
                <UploadProfilePicture user={user} />
                <CustomerProfileForm user={user} />
                {/* <GeneralInfo />
            <AddressInfo />
            <div className="acc-submit">
                <Link href="#" className="btn btn-secondary">Cancel</Link>
                <Link href="#" className="btn btn-primary">Save Changes</Link>
            </div> */}
            </div>
            {/* <DeleteAccountModel /> */}
        </>
    )
}