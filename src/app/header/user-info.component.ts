import { Component, Injectable, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";

@Component({
    selector: "app-user-info",
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit {
    myInfo: UserInfo | undefined;

    constructor(private UserInfoService: UserInfoService) {

    }
    ngOnInit(): void {
        console.log("Sending get request to server");
        this.UserInfoService.getUserInfo();
        console.log("Showing user info");
        this.showUserInfo();
    }

    showUserInfo() {
        this.UserInfoService.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}