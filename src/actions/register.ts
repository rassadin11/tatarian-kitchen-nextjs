"use server"

import { IFormData } from "@/types/form-data";
import { saltAndHashPassword } from "@/utils/password";
import { prisma } from "@/utils/prisma";

export async function registerUser({ email, password, confirmPassword }: IFormData) {

    if (password !== confirmPassword) {
        return { error: "Пароли не совпадают" }
    }

    if (password.length < 6) {
        return {
            error: "Пароль должен быть не менее 6 символов"
        }
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (existingUser) {
            return { error: "Пользователь с таким email уже существует" }
        }

        const pwHash = await saltAndHashPassword(password)

        const user = await prisma.user.create({
            data: {
                email,
                password: pwHash
            }
        })

        console.log(user)

        return user
    } catch (error) {
        console.error("Ошибка при регистрации: ", error)
        return { error: 'Ошибка при регистрации' }
    }
}