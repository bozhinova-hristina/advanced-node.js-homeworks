let firstName: string = "Hristina";

const balance = 2345;

let stock = 5000;

interface Perfume {
  price: number;
  color: string;
  scent: string;
  brand: string;
}

const invictus: Perfume = {
  price: 100,
  color: "red",
  scent: "roses",
  brand: "domestos",
};

class ScentedCandle implements Perfume {
  constructor(
    public price: number,
    public color: string,
    public scent: string,
    public brand: string
  ) {}

  printPrice() {
    console.log(`The price is: ${this.price}`);
  }
}

const lavanderCandle = new ScentedCandle(5000, "violet", "lavander", "cif");

const rosesCandle = new ScentedCandle(212, "red", "rose", "cif");

const camomileCandle = new ScentedCandle(
  9880,
  "white",
  "camomile",
  "goodnature"
);

const candles: ScentedCandle[] = [lavanderCandle, rosesCandle, camomileCandle];

candles.push(new ScentedCandle(300, "blue", "funky", "even funkier"));

console.log(candles);
