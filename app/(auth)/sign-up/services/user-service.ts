// services/UserAPI.t

import {storeAxios} from "@/app/plugins/http-client";
import {UserCreateDto} from "@/app/(auth)/sign-up/models/user-create-dto";

export class UserService {
    // نیازی به سازنده نیست؛ مستقیماً از userAxios استفاده می‌کنیم
    private api = storeAxios;

    public async create(params: UserCreateDto): Promise<any> {
        const response = await this.api.post<any>("User/Create", params);
        return response.data;
    }
}

// و در همان فایل یا در یک index.js جداگانه
export const userService = new UserService();
