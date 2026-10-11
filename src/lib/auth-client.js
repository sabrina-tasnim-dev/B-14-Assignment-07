import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://b-14-assignment-07.vercel.app"
})

export const { signIn, signUp,signOut, useSession } = createAuthClient()