"use client";
export default interface CategoryInterface {
    id?: number;
    uuid: string;
    name: string;
    parent_category_id: BigInteger;
    created_at: string;
    updated_at: string;
}