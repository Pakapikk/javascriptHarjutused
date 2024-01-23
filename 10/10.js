/*
Aksel Ratt
02.12.2023
Ülesanne 10
*/

// Toote objekt
let toode = {
    nimetus: "Xanax",
    hind: 2,
    kogus: 10,

    // Meetotid
    koguhind: function () {
        return this.hind * this.kogus;
    },

    muudaKogust: function (uusKogus) {
        this.kogus = uusKogus;
    },

    kuvaSisu: function () {
        return `Toode: ${this.nimetus}, hind: ${this.hind}, kogus: ${this.kogus}`; // sõne mall
    },
};

console.log("Toote nimetus:", toode.nimetus);
console.log("Hind:", toode.hind);
console.log("Kogus:", toode.kogus);

console.log("Koguhind:", toode.koguhind());

toode.muudaKogust(5);
console.log("Uus kogus:", toode.kogus);

console.log(toode.kuvaSisu());

// Ostukorv
const ostukorv = {
tooted: [
    { nimi:'Piim', hind:3.60, kogus:2 },
    { nimi:'Leib', hind:2.00, kogus:1 },
    { nimi:'Munad', hind:1.50, kogus:6 },
    { nimi:'Juust', hind:4.20, kogus:1 },
    { nimi:'Tomatid', hind:2.30, kogus:3 },
  ],
  
  kuvaSisu: function () {
    this.tooted.forEach(toode => {
      console.log(`${toode.nimi} - ${toode.hind} eurot, kogus: ${toode.kogus}`);
    })
  },

  lisaToode: function (nimi, hind, kogus) {
    this.tooted.push({ nimi, hind, kogus });
  },
  
  koguSumma: function () {
    let summa = 0;
    this.tooted.forEach(toode => {
      summa += toode.hind * toode.kogus;
    })
    return summa;
  }
}

ostukorv.lisaToode('Kohv', 5.80, 2);

console.log("Ostukorvi sisu:");
ostukorv.kuvaSisu();

console.log('Ostukorvi kogu summa:', ostukorv.koguSumma());