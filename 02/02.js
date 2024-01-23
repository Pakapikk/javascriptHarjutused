/*
Aksel Ratt
25.11.2023
Ülesanne 2
*/

// Kellaaeg
tunnid = "2:";
minutid = "38:";
sekundid = "59PM";

console.log(tunnid + minutid + sekundid) // väljund: 2:38:59PM

// Tsitaat lause sees
tsitaat = '"Ükskord me võidame niikuinii!" - Heinz Valk';
console.log(tsitaat);

// Mallide kasutamine
eesnimi = "Jüri";
perenimi = "Jurakas";

console.log(`Jüri Jurakas nimetähed on ${eesnimi[0]}.${perenimi[0]}.`); // väljund: Jüri Jurakas nimetähed on J.J.

// Perenime pikkus 
let muutuja1 = "Perenimi, Eesnimi";
let muutuja2 = 8;

let muutuja3 = muutuja1.substring(0, muutuja2);

console.log(muutuja3.toUpperCase());
console.log(muutuja3.length);

// E-posti aadressi muutmine
let epost = "karrolk@netlog.com";

console.log(epost.replaceAll("netlog", "gmail")); // väljund: karrolk@gmail.com

// Andmerida analüüs
andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";

console.log(`${andmerida.slice(21, 33)} ja ${andmerida.slice(51, 65)}`); // väljund: mmartinovic0 ja 40.19.226.175