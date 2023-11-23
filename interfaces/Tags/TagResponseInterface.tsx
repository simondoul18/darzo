"use client";
import TagsInterface from "./TagInterface";
import OriginResponse from "@/interfaces/Origin/OriginResponse";

export default interface TagResponseInterface extends OriginResponse {
    data: TagsInterface[];
}