import ConnectionService from "../../ConnectionService";
import axios from 'axios';

export default class CurrencyService extends ConnectionService {

    currencies(search: string | null = null) {
        let params: any = {};
        if (search && search.length > 0) {
            params.search = search;
        }
        return axios.get(this.getApiUrl() + this.endPoint('/currencies', params));
    }
}