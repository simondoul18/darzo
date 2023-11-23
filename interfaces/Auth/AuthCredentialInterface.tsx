"use client";
export default interface AuthCredentialsInterface {
    client_secret: string | undefined,
    client_id: string | undefined,
    grant_type: string,
    username: string,
    password: string
}