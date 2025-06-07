import { storeAxios } from "@/app/plugins/http-client";
import { ResponseModel } from "@/app/models/response";
import {SignInDto, SignInViewModel, UserCreateViewModel, UserModels} from "@/app/(modules)/auth/models/sign-in-models";

export class AuthService {
    private api = storeAxios;

    public async signIn(params: SignInDto): Promise<ResponseModel<SignInViewModel>> {
        const response = await this.api.post<ResponseModel<SignInViewModel>>("Auth/SignIn", params);
        return response.data;
    }

    public async create(params: UserModels): Promise<ResponseModel<UserCreateViewModel>> {
        const response = await this.api.post<ResponseModel<UserCreateViewModel>>("User/Create", params);
        return response.data;
    }
}

export const authService = new AuthService();

