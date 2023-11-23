import AuthCredentialsInterface from "@/interfaces/Auth/AuthCredentialInterface";
import ConnectionService from "../ConnectionService";
import axios from 'axios';

export default class PassportAuthenticationService extends ConnectionService {

    async auth(credentials: AuthCredentialsInterface) {
        return axios.post(this.getUrl() + this.endPoint('/oauth/token'), {
            ...credentials
        });
    }

    async fetchUserProfile(token: any) {
        return axios.get(this.getUrl() + this.endPoint('/api/user'), {
            headers: {
                Authorization: "Bearer " + token.access_token
            }
        });
    }

    async fetchUserProfileX(token: any) {
        return axios.get(this.getUrl() + this.endPoint('/api/userx'));
    }
}