import ProductInterface from "@/interfaces/Products/ProductInterface";
import ConnectionService from "../../ConnectionService";
import axios from 'axios';

export default class ProductService extends ConnectionService {

    create(params: ProductInterface) {
        return axios.post(this.getApiUrl() + this.endPoint('/producers/products'), params);
    }

    fetch(routeParam: string, queryParams: object) {
        return axios.get(this.getApiUrl() + this.endPoint('/products/' + routeParam, queryParams));
    }

    update(product: any, uuid: string) {
        return axios.post(this.getApiUrl() + this.endPoint('/producers/products/' + uuid), product);
    }

    fetchPaginated(queryParams: object) {
        return axios.get(this.getApiUrl() + this.endPoint('/products', queryParams));
    }

    fetchPaginatedProductsForProducer(queryParams: object) {
        return axios.get(this.getApiUrl() + this.endPoint('/producers/products/all', queryParams));
    }
}