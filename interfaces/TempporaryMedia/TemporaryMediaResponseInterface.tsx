"use client";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import TemporaryMediaInterface from "./TemporaryMediaInterface";

export default interface TemporaryMediaResponseInterface extends OriginResponse {
    data: TemporaryMediaInterface;
}