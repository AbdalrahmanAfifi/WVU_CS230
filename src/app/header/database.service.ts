import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { CardComponent } from "../body/card.component";
import { Card } from "../body/card.model";


@Injectable({
    providedIn: 'root'
})
export class DataBaseService {
    items: Observable<CardComponent[]>;
    constructor(private db: AngularFireDatabase) {
        console.log("Setting up firebase communication");
        this.items = this.db.list<Card>('items').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: CardComponent[]) => {
            console.log("data received");
            for (let item of data) {
                console.log(item);
            }
        });
    }


}