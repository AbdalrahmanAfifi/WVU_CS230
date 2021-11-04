export class Card {
    title: string;
    price: string;
    imagePath: string;
    


    constructor({ title, price, imagePath }:
        { title: string, price: string, imagePath: string }) {
        this.title = title;
        this.price = price;
        this.imagePath = imagePath;
    }
}