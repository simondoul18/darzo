import CountryInterface from "../Countries/CountryInterface";

export default interface CustomerAddressInterface {
    id: number;
    full_name: string;
    phone: string;
    email: string;
    address_name?: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    region: string;
    zip: string;
    country_id: string;
    country?: CountryInterface;
}