"use client";
import CurrencyInterface from "./CurrencyInterface";
import OriginResponse from "@/interfaces/Origin/OriginResponse";

export default interface CurrencyResponseInterface extends OriginResponse {
    data: CurrencyInterface[];
}