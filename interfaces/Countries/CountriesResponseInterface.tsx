import OriginResponse from "../Origin/OriginResponse";
import CountryInterface from "./CountryInterface";

export default interface CountriesResponseInterface extends OriginResponse {
    data: CountryInterface[];
}