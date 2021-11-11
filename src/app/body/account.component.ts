import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { UserInfo } from "../header/user-info.model";
import { UserInfoService } from "../header/user-info.service";
import { AccountResponse } from "./account.Response";
import { AccountService } from "./account.service";

@Component({
    selector: 'app-account',
    templateUrl: 'account.component.html'
})
export class AccountComponent {
    public buttonClicked!: string;
    private response!: Observable<AccountResponse>;

    constructor(private infoService:UserInfoService, private AccountService: AccountService) {

    }

    public onSubmit(form: NgForm) {
        console.log("Button clicked = " + this.buttonClicked)
        console.log(form.value);

        const email = form.value.email;
        const password = form.value.password;

        if (this.buttonClicked == 'Login') {
            this.response = this.AccountService.login(email, password);
        }

        if (this.buttonClicked == 'SignUp') {
            this.response = this.AccountService.signUp(email, password);
        }

        this.response.subscribe(
            (data: AccountResponse) => {
                console.log(data)
            },
            error => {
                console.log(error.error.error)
            }
        )
        form.reset();
    }

    onUpdateUserInfo(data:UserInfo){
        console.log("You pressed a button");
        this.infoService.modifyUserInfo(data).subscribe(data=>{
            console.log("Updated you info")
        });
    }
}