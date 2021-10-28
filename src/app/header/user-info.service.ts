import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "../body/card.module";
import { UserInfo } from "./user-info.model";

@Injectable({ providedIn: 'root' })
export class UserInfoService {
    private baseUrl: string = 'https://bestbuy-app-49774-default-rtdb.firebaseio.com/';
    private cardEndPoint: string = 'items.json';
    private endPoint: string = 'user-info.json';
    constructor(private http: HttpClient) {

    }

    getCard() {
        return this.http.get<Card[]>(this.baseUrl + this.cardEndPoint);
    }

    getUserInfo() {
        return this.http.get<UserInfo>(this.baseUrl + this.endPoint);
    }

    modifyUserInfo(data: UserInfo) {

        return this.http.post(this.baseUrl + this.endPoint, data);
    }

}