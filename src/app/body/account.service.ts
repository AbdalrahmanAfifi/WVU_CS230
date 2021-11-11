import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AccountResponse } from "./account.Response";


@Injectable({
    providedIn: 'root'
})
export class AccountService {
    baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts";
    signUpEndpoint: string = "signUp";
    signInEndpoint: string = "signInWithPassword";

    public constructor(private http: HttpClient) {

    }

    //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    public signUp(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true 
        }

        return this.http.post<AccountResponse>(this.baseUrl + ':' + this.signUpEndpoint + '?' + 'key=' + environment.firebase.apiKey, requestBody);
    }

    //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    public login(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        }
        return this.http.post<AccountResponse>(this.baseUrl + ':' + this.signInEndpoint + '?' + 'key=' + environment.firebase.apiKey, requestBody);
    }
}