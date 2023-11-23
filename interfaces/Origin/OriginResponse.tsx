"use client";
export default interface OriginResponse<Model = any> {
    success: string;
    code: number;
    locale: string;
    message: string;
    data?: Model;
}