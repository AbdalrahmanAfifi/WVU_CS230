import { Component } from "@angular/core";
import { Card } from "../body/card.module";
import { UserInfoService } from "../header/user-info.service";


@Component({
    selector: "app-home-layout.component",
    templateUrl: "home-layout.component.html"
})

export class HomeLayoutComponent {
    cards: Card[] = [];

    constructor(private UserInfoService: UserInfoService) {
        console.log();
    }

    ngOnInit() {
        this.UserInfoService.getUserInfo().subscribe((data: Card[]) => {
            for (var item of data) {
                this.cards.push(item);
            }
        });
    }

}