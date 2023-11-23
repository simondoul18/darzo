"use client";
import CategoryInterface from "./CategoryInterface";
import OriginResponse from "@/interfaces/Origin/OriginResponse";

export default interface CategoryResponseInterface extends OriginResponse {
    data: CategoryInterface[];
}