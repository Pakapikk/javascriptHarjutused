/*
Aksel Ratt
03.12.2023
Ülesanne 12
*/

let toode = {
    nimetus: "Xanax",
    hind: 2,
    kogus: 10,
};
 
// Valin sõlmed
const ul = document.getElementById("ostukorv");
const kogusummaVark = document.getElementById("kogusumma");

// Lisan ostukorvi nime, hinna ja koguse loendisse
for (const kirje in toode) {
    ul.innerHTML += `<li>${kirje}: ${toode[kirje]}</li>`;
}

// Lisan kogusumma p siltide vahele
const kogusumma = toode.hind * toode.kogus;
kogusummaVark.textContent = `kogusumma: ${kogusumma}`;