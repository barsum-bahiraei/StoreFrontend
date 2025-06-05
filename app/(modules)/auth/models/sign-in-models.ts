export class SignInDto {
    email: string;
    password: string;
}

export class SignInViewModel {
    token: string;
    // Add other fields if your API returns more
}