import { Component } from "@angular/core";
import { Card } from "../body/card.module";
import { mock_card } from "../body/mock-card";

@Component({
    selector: "app-home-layout.component",
    templateUrl: "home-layout.component.html"
})

export class HomeLayoutComponent {
    cards: Card[] = [];

    constructor() {
        for (var card of mock_card)
            this.cards.push(new Card(card));
    }

}

