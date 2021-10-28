import { Component } from "@angular/core";
import { UserInfo } from "../header/user-info.model";
import { UserInfoService } from "../header/user-info.service";

@Component({
    selector: 'app-account',
    templateUrl: 'account.component.html'
})
export class AccountComponent {
    constructor(private infoService: UserInfoService) {

    }

    onUpdateUserInfo(data: UserInfo) {
        console.log("You pressed a button");
        this.infoService.modifyUserInfo(data).subscribe(data => {
            console.log("updated your info");
        });
    }
}