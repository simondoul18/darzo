import ConnectionService from "../../ConnectionService";
import axios from 'axios';

export default class CategoryService extends ConnectionService {

    categories(search: string | null = null) {
        let params: any = {};
        if (search && search.length > 0) {
            params.search = search;
        }
        return axios.get(this.getApiUrl() + this.endPoint('/categories', params));
    }
}