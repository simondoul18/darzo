"use client";
import { useState, useEffect } from "react";
import { avatar_02 } from "@/storage/image";
// import Link from "next/link"
import Image from 'next/image'
import SlickSpinner from "@/components/global/loaders/SlickSpinner";
// import { useSession } from "next-auth/react"
import CustomerProfileService from "@/services/fetch/CustomerProfile/CustomerProfileService";
import TemporaryMediaInterface from "@/interfaces/TempporaryMedia/TemporaryMediaInterface";
import MediaService from "@/services/MediaService/MediaService";
import { AxiosResponse } from "axios";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import { UploadCloud } from "react-feather";

export default function UploadProfilePicture(props: { user: object | null }) {
    // const { data: session, status, update: sessionUpdate } = useSession()
    let [profilePicture, setProfilePicture]: any = useState(avatar_02);
    let [imageUploadRequest, setImageUploadRequest]: any = useState(false);
    useEffect(() => {
        //@ts-ignore
        if (props.user?.customer?.profile_pic) {
            //@ts-ignore
            setProfilePicture(props.user.customer.profile_pic);
        }
    }, [props]);

    function uploadProfileImage(event: React.ChangeEvent<HTMLInputElement>) {
        let mediaService = new MediaService;
        if (event.target.files && event.target.files.length > 0 && mediaService.onlyImages(event.target.files[0])) {
            setImageUploadRequest(true);
            let profileService = new CustomerProfileService;
            profileService.uploadProfilePicture(event.target.files).then((response: AxiosResponse<OriginResponse<TemporaryMediaInterface[]>>) => {
                // console.log(response.data.data.url)
                //@ts-ignore
                setProfilePicture(response.data.data.url);
                // updateSession(response.data.url)
                setImageUploadRequest(false);
            }).catch((err: any) => {
                console.log(err);
                setImageUploadRequest(false);
            })
        }
    }
    // async function updateSession(url: string){
    //     sessionUpdate({
    //         ...session,
    //         user:{
    //             ...session.user,
    //             name: "ddd"
    //         }
    //     })
    // }
    return (
        <>
            <h6 className="user-title">Profile Picture</h6>
            <div className="pro-picture">
                <div className="pro-img">
                    <Image src={profilePicture} alt="user" width={61} height={61} />
                </div>
                <div className="pro-info">
                    <div className="d-flex">
                        <div className="img-upload">
                            <UploadCloud size={18} /> Upload
                            <input type="file" />
                        </div>
                        <div className={`img-upload ${imageUploadRequest ? '' : 'd-none'}`}>
                            <SlickSpinner />
                        </div>
                        {/* <Link href="#" className="btn btn-remove">Remove</Link> */}
                    </div>
                    <p>*image size should be at least 320px big,and less then 500kb. Allowed files .png and .jpg.</p>
                </div >
            </div >
        </>
    )
}