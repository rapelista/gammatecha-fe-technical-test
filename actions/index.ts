"use server";
import { signIn } from "auth";

export async function authenticate(_currentState: unknown, formData: FormData) {
    try {
        await signIn("credentials", {
            redirect: false,
            username: formData.get("username"),
            password: formData.get("password"),
        });
    } catch (error) {
        if (error) {
            console.log(error);
            switch (error.type) {
                case "CredentialsSignin":
                    return "Invalid credentials.";
                default:
                    return "Something went wrong.";
            }
        }
        return error;
    }
}
