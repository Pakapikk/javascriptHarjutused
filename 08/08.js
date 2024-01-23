/*
Aksel Ratt
30.11.2023
Ülesanne 8
*/

const mundid = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];
let loend = 0;
let sum = 0;
let sorteeritud = []; // Uus massiiv sorteeritud müntide jaoks

while (mundid.length > 0) {
    const currentCoin = mundid.pop(); // Võtab viimase elemendi
    sorteeritud.push(currentCoin); // Lisab mündi teise massiivi
    loend++;
    sum += currentCoin; // Lisab mündi väärtuse kokku kogusummale
}

console.log(`Sorteeritud müntide massiiv: ${sorteeritud}`);
console.log(`Kokku ${loend} münti`);
console.log(`Müntide kogusumma on ${sum}`);