import ConnectionService from "../../ConnectionService";
import axios from 'axios';

export default class TagService extends ConnectionService {

    tags(search: string | null = null) {
        let params: any = {};
        if (search && search.length > 0) {
            params.search = search;
        }
        return axios.get(this.getApiUrl() + this.endPoint('/tags', params));
    }

    fetchPaginatedTags(queryParams: object) {
        return axios.get(this.getApiUrl() + this.endPoint('/tags/paginated', queryParams));
    }

    create(data: any) {
        return axios.post(this.getApiUrl() + this.endPoint('/tags'), data);
    }

    update(data: any, id: number) {
        return axios.put(this.getApiUrl() + this.endPoint('/tags/' + id), data);
    }

    delete(id: number) {
        return axios.delete(this.getApiUrl() + this.endPoint('/tags/' + id));
    }
}