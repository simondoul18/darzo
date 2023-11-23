import CustomerAddressInterface from "../CustomerAddresses/CustomerAddressInteface";

export default interface CustomerOrdeDeliveryInterface extends CustomerAddressInterface {
    order_id: number;
}