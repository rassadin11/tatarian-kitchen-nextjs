"use server"

import { signIn } from "@/auth/auth";

export async function signInWithCredentials(email: string, password: string) {
    try {
        const res = await signIn("credentials", {
            email, password, redirect: false
        })

        return res
    } catch (error) {
        console.error("Ошибка авторизации: ", error);
        throw error
    }
}