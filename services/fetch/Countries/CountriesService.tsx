import ConnectionService from "@/services/ConnectionService";
import axios from "axios";

export default class CountriesService extends ConnectionService {

    countries(search: string | null = null) {
        let params: any = {};
        if (search && search.length > 0) {
            params.search = search;
        }
        return axios.get(this.getApiUrl() + this.endPoint('/countries', params));
    }
}