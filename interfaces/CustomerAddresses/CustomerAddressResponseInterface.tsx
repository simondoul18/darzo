import OriginResponse from "../Origin/OriginResponse";
import CustomerAddressInterface from "./CustomerAddressInteface";

export default interface CustomerAddressReponseInterface extends OriginResponse {
    data: CustomerAddressInterface[];
}