import ConnectionService from "@/services/ConnectionService";
import axios from "axios";

export default class CustomerOrderService extends ConnectionService {

    createProduct(params: any) {
        return axios.post(this.getApiUrl() + this.endPoint('/customers/orders'), params);
    }

    fetchSingle(uuid: string, query: object) {
        return axios.get(this.getApiUrl() + this.endPoint('/customers/orders/' + uuid, query));
    }

    fetchAllCustomerOrders(query: object) {
        return axios.get(this.getApiUrl() + this.endPoint('/customers/orders', query));
    }
}