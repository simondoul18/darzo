import CustomerAddressInterface from "@/interfaces/CustomerAddresses/CustomerAddressInteface";
import CustomerAddressReponseInterface from "@/interfaces/CustomerAddresses/CustomerAddressResponseInterface";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import ConnectionService from "@/services/ConnectionService";
import axios from "axios";

export default class CustomerAddressService extends ConnectionService {

    getAuthUserAddresses(q: object) {
        return axios.get<OriginResponse<CustomerAddressInterface[]>>(this.getApiUrl() + this.endPoint('/customers/addresses', q));
    }

    createCustomerAddress(params: object) {
        return axios.post<OriginResponse<CustomerAddressInterface>>(this.getApiUrl() + this.endPoint('/customers/addresses'), params);
    }

    updateCustomerAddress(params: object, id: number) {
        return axios.patch<OriginResponse<CustomerAddressInterface>>(this.getApiUrl() + this.endPoint('/customers/addresses/' + id), params);
    }
}