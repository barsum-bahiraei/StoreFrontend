// services/UserAPI.t

import {storeAxios} from "@/app/plugins/http-client";
import {ResponseModel} from "@/app/models/response";
import {UserModels, UserCreateViewModel} from "@/app/(modules)/auth/models/user-models";

export class UserService {
    // نیازی به سازنده نیست؛ مستقیماً از userAxios استفاده می‌کنیم
    private api = storeAxios;

    public async create(params: UserModels): Promise<ResponseModel<UserCreateViewModel>> {
        const response = await this.api.post<ResponseModel<UserCreateViewModel>>("User/Create", params);
        return response.data;
    }
}

// و در همان فایل یا در یک index.js جداگانه
export const userService = new UserService();
