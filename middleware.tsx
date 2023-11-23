"use client";
export { default } from "next-auth/middleware"


export const config = { matcher: ["/dashboard", "/product/designer", "/checkout/", "/customer/", "/customer/my-orders"] }
