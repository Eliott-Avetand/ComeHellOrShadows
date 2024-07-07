import { User } from "@/types";
import { Api } from "@config/Api";

export const userService = {
    login,
    logout,
    register,
};

async function login(properties: { email: string, password: string }): Promise<User> {
    return Api.post<User>('/auth/login', properties);
}

async function logout() {
    return Api.post<void>('/auth/logout', {});
}

async function register(properties: { email: string, password: string }) {
    return Api.post<User>('/auth/register', properties);
}
