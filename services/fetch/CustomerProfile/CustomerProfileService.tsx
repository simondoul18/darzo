"use client"
import ConnectionService from "../../ConnectionService";
import axios from 'axios';

export default class CustomerProfileService extends ConnectionService {

    profile(id: string|null) {
        let params: any = {};
        if (id && id.length > 0) {
            params.id = id;
        }
        return axios.get(this.getApiUrl() + this.endPoint('/customers/profile', params));
    }
    update(profile: any) {
        return axios.post(this.getApiUrl() + this.endPoint('/customers/update-profile'), profile);
    }
    async uploadProfilePicture(file: any) {
        const reader = () => new Promise((resolve, reject) => {
            const reader = new FileReader;
            reader.readAsDataURL(file[0]);
            reader.onloadend = () => {
                resolve(reader?.result?.toString());
            };
        })

        return axios.post(this.getApiUrl() + this.endPoint('/customers/upload-rofile-picture'), {
            media: (await reader())
        });
    }
}