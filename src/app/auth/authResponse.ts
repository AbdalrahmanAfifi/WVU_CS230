export interface AuthResponse {
    idToken: string;
    email: string;
    refreshToken: string;
    expeiresIn: string;
    localid: string;
    registered?: boolean;
}