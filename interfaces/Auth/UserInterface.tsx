"use client";

import RoleInterface from "./RoleInterface";

export default interface UserInterface {
    id?: BigInteger;
    admin_id: BigInteger;
    name: string;
    email: string;
    email_verified_at: string;
    function: any;
    is_active: Boolean;
    language: string;
    mobile: string;
    organization_code: string;
    phone: string;
    profile_pic: string;
    vat_code: string;
    updated_at: string;
    created_at: string;
    role?: RoleInterface;
}