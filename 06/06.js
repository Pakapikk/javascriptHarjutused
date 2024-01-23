/*
Aksel Ratt
30.11.2023
Ülesanne 6
*/

// Positiivne või negatiivne
let number = prompt("Sisesta number");

switch (true) {
    case (number > 0):
        console.log("positiivne");
        break;
    case (number < 0):
        console.log("negatiivne");
        break;
    case (number == 0):
        console.log("null");
        break;
}

// Restoran
let broneeringuteArv = prompt("Sisesta broneeringu arv");

switch (true) {
    case (broneeringuteArv >= 7):
        console.log("Valige suur laud.");
        break;
    case (broneeringuteArv >= 5):
        console.log("Valige laud kuuele inimesele.");
        break;
    case (broneeringuteArv >= 3):
        console.log("Valige laud neljale inimesele.");
        break;
    case (broneeringuteArv >= 1):
        console.log("Valige laud kahele inimesele.");
        break;
}