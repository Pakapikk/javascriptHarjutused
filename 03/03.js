/*
Aksel Ratt
25.11.2023
Ülesanne 3
*/

// Sõidu aeg ja kaugus
let kaugus = 50;
let kiirus = 70;

let aeg = kaugus / kiirus;

console.log(`Sõiduaeg on ${aeg} tundi.`);

// Postituste kuvamine
let posts = 137;
let onePage = 10; // Ühel lehel on 10 postitust

let pages = Math.ceil(posts / onePage); // Arvutab lehekülgede arvu ja ümardab ülesse 

let lastPagePosts = posts % onePage; // Viimasel lehel olevate postituste arv

console.log(`Lehekülgi on kokku ${pages}.`);
console.log(`Viimasel lehel on ${lastPagePosts} postitust.`);

// Serveri töökulu
let serveriVoimsus = 400; // vatti
let elektriHind = 9.69 / 100; // eurot/kWh

let vooluTarbimine = serveriVoimsus / 1000;
console.log(`Voolutarbimine: ${vooluTarbimine} kW`);

let tooKulu = vooluTarbimine * elektriHind;
console.log(`Töökulu on ühe tunni kohta ${tooKulu}`);