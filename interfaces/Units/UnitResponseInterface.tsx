import OriginResponse from "@/interfaces/Origin/OriginResponse";
import UnitInterface from "./UnitInterface";

export default interface UnitsResponseInterface extends OriginResponse {
    data: UnitInterface[];
}