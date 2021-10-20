import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "../body/card.module";

@Injectable({providedIn:'root'})
export class UserInfoService {
    private baseUrl: string = 'https://bestbuy-app-49774-default-rtdb.firebaseio.com/';
    private endpoint: string = 'items.json';
    constructor(private http: HttpClient) {

    }

    getUserInfo() {
        return this.http.get <Card[]>(this.baseUrl + this.endpoint);
    }
}