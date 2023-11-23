import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import PassportAuthenticationService from '@/services/auth/PassportAuthenticationService'
import UserInterface from '@/interfaces/Auth/UserInterface'
import TokenInterface from '@/interfaces/Auth/Token'
import { AxiosResponse } from 'axios'




export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            // @ts-ignore
            async authorize(credentials: { username: string, password: string }) {
                let passportAuth = new PassportAuthenticationService;
                let tokens: TokenInterface | null = null;


                await passportAuth.auth({
                    ...credentials,
                    client_secret: process.env.NEXT_PUBLIC_KAPILI_CRM_CLIENT_SECRET,
                    client_id: process.env.NEXT_PUBLIC_KAPILI_CRM_CLIENT_ID,
                    grant_type: 'password'
                }).then((response: AxiosResponse<TokenInterface>) => {
                    tokens = response.data
                });


                let userProfile: { user: UserInterface, token: TokenInterface | null } = await passportAuth.fetchUserProfile(tokens).then(response => {
                    let authResponse: { user: UserInterface, token: TokenInterface | null } = {
                        user: response.data,
                        token: tokens
                    };
                    return authResponse;
                });

                if (userProfile) {
                    return userProfile;
                }

                return null;
            }
        }),
        // {
        //     id: 'kapili-crm',
        //     name: 'KapiliCRM',
        //     type: 'oauth',
        //     version: '2.0',
        //     scope: '',
        //     checks: ["pkce", "state"],
        //     clientId: '9a2fe14d-d1c3-4a7d-818a-2b849e29b3ea',
        //     clientSecret: '',
        //     authorization: {
        //         url: 'http://kapili-crm.local/oauth/authorize',
        //         params: { scope: '', state: '3e2727957a1bd9f47b11ff347fca362b6060941dedfg', response_type: 'code', redirect_uri: 'http://localhost:3000/api/auth/callback/kapili-crm' }
        //     },
        //     token: {
        //         url: 'http://kapili-crm.local/oauth/token',
        //         params: { grant_type: 'authorization_code' }
        //     },
        //     userinfo: 'http://kapili-crm.local/api/marketplace/user',
        //     profile(profile: any, tokens: any): Awaitable<any> {
        //         let authResponse: { user: UserInterface, token: TokenInterface | null, id: number } = {
        //             user: profile,
        //             token: tokens,
        //             id: 23452
        //         };
        //         return authResponse;
        //     }
        // }
    ],
    callbacks: {
        async jwt({ token, user, account, trigger, session }: any) {
            // if(trigger === 'update'){
            //     token.user.name = session.user.name
            //     return token;
            // }
            if (account && user) {
                return {
                    ...token,
                    accessToken: user.token.access_token,
                    refreshToken: user.token.refresh_token,
                    accessTokenExpires: user.token.expires_in,
                    user: user.user
                };
            }
            return token;
        },

        async session({ token, trigger,session }: any) {
            // if(trigger === 'update'){
            //     token.user.name = session.user.name
            //     return token;
            // }
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            session.accessTokenExpires = token.accessTokenExpires;
            session.user = token.user.data;
            session.role = token.user.data.role;

            return session;
        },
        async redirect({ url, baseUrl }: any) {

            return baseUrl + "/home";
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60, // 1h
    },
    pages: {
        signIn: '/login', // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}