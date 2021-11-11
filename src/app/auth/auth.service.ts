import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts";
    private signUpEndpoint: string = "signUp";
    private signInEndpoint: string = "signInWithPassword";

    constructor(private http: HttpClient) {

    }

    //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    public signUp(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        }

        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signUpEndpoint + '?' + 'key=' + environment.firebase.apiKey, requestBody);
    }

    //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    public login(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        }
        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signInEndpoint + '?' + 'key=' + environment.firebase.apiKey, requestBody);
    }
}