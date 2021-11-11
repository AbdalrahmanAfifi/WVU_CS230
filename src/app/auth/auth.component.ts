import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";

@Component({
    selector: 'app-auth',
    templateUrl: 'auth.component.html'
})

export class AuthComponent {
    public buttonClicked: string=" ";
    private response!: Observable<AuthResponse>;


    constructor(private authService: AuthService) {

    }

    public onSubmit(form: NgForm) {
        console.log("Button clicked" + this.buttonClicked)
        console.log(form.value);
        
        const firstName=form.value.firstName;
        const lastName=form.value.lastName;
        const email = form.value.email;
        const password = form.value.password;

        if (this.buttonClicked == 'Login') {
            this.response=this.authService.login(firstName,lastName);
            this.response = this.authService.login(email, password);
        }

        if (this.buttonClicked == 'SignUp') {
            this.response=this.authService.signUp(firstName,lastName);
            this.response = this.authService.signUp(email, password);
        }

        this.response.subscribe(
            (data: AuthResponse) => {
                console.log(data)
            },
            error => {
                console.log(error.error.error)
            }
        )
        form.reset();
    }
}