"use client"

import { signInWithCredentials } from "@/actions/sign-in";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/react";
import { useState } from "react";

interface IProps {
    onClose: () => void
}

export default function LoginForm({ onClose }: IProps) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await signInWithCredentials(formData.email, formData.password)

        window.location.reload()
        onClose()
    }

    return (
        <Form className="w-full" onSubmit={handleSubmit}>
            <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                name="email"
                placeholder="Введите email"
                type="email"
                value={formData.email}
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none"
                }}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                validate={(value) => {
                    if (!value) return "Почта обязательна!"
                    return null
                }}
            />
            <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="password"
                name="password"
                placeholder="Введите пароль"
                type="password"
                value={formData.password}
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none"
                }}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                validate={(value) => {
                    if (!value) return "Пароль обязателен!"
                    return null
                }}
            />

            <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
                <Button variant="light" onPress={onClose}>
                    Отмена
                </Button>
                <Button color="primary" type="submit">
                    Войти
                </Button>
            </div>
        </Form>
    )
}
