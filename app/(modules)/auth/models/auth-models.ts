export class LoginParameters {
    email: string;
    password: string;
}

export class LoginViewModel {
    token: string;
    name: string;
    family: string;
    email: string;
    // Add other fields if your API returns more
}

export class RegisterParameters {
    name: string;
    family: string;
    email: string;
    password: string;
}

export class RegisterViewModel {
    name: string;
    family: string;
    email: string;
    token: string;
}

