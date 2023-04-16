"use strict";
let firstName = "Hristina";
const balance = 2345;
let stock = 5000;
const invictus = {
    price: 100,
    color: "red",
    scent: "roses",
    brand: "domestos",
};
class ScentedCandle {
    constructor(price, color, scent, brand) {
        this.price = price;
        this.color = color;
        this.scent = scent;
        this.brand = brand;
    }
    printPrice() {
        console.log(`The price is: ${this.price}`);
    }
}
const lavanderCandle = new ScentedCandle(5000, "violet", "lavander", "cif");
const rosesCandle = new ScentedCandle(212, "red", "rose", "cif");
const camomileCandle = new ScentedCandle(9880, "white", "camomile", "goodnature");
const candles = [lavanderCandle, rosesCandle, camomileCandle];
candles.push(new ScentedCandle(300, "blue", "funky", "even funkier"));
console.log(candles);
