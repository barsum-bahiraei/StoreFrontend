export class SignInDto {
    email: string;
    password: string;
}

export class SignInViewModel {
    token: string;
    // Add other fields if your API returns more
}

export class UserModels {
    name: string;
    family: string;
    email: string;
    password: string;
}

export class UserCreateViewModel {
    id: number;
    name: string;
    family: string;
    email: string;
    token: string;
}