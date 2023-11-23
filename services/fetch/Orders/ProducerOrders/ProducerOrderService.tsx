import ConnectionService from "@/services/ConnectionService";
import axios from "axios";

export default class ProducerOrderService extends ConnectionService {
    fetchPaginated(q: any) {
        return axios.get(this.getApiUrl() + this.endPoint('/producers/orders', q));
    }
}