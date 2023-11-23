"use client"
import ConnectionService from "../../ConnectionService";
import axios from 'axios';

export default class TemporaryMediaService extends ConnectionService {

    async postMedia(file: any) {
        const reader = () => new Promise((resolve, reject) => {
            const reader = new FileReader;
            reader.readAsDataURL(file[0]);
            reader.onloadend = () => {
                resolve(reader?.result?.toString());
            };
        })

        return axios.post(this.getApiUrl() + this.endPoint('/temp-media'), {
            media: (await reader())
        });
    }
}