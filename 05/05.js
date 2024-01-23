/*
Aksel Ratt
28.11.2023
Ülesanne 5
*/

// Temperatuurid
temp = 16;

if (temp >= 25) {
  console.log("Väga kuum ilm!");
} else if (temp >= 15) {
  console.log("Mõnus temperatuur");
} else {
  console.log("Jahe ilm");
}

// Kasutajanime kontroll
prompt("Sisesta nimi: ");
admin = true;
let nimi = admin == true ? "Tere, administraator!" : "Tere, külaline!";
console.log(nimi);

// Ürituse piletite hind
let piletituup = prompt("Kas täispilet (sisesta ilma täpitähtedeta) või sooduspilet?");
let vanus = prompt("Sisesta enda vanus");

if (vanus <= 17) {
  if (piletituup === "taispilet") {
    console.log("Pileti hind: 10 eurot");
  } else if (piletituup === "sooduspilet") {
    console.log("Pileti hind: 8 eurot");
  }
} else if (vanus >= 18 && vanus <= 64) {
  if (piletituup === "taispilet") {
    console.log("Pileti hind: 20 eurot");
  } else if (piletituup === "sooduspilet") {
    console.log("Pileti hind: 15 eurot");
  }
} else if (vanus >= 65) {
  if (piletituup === "taispilet") {
    console.log("Pileti hind: 15 eurot");
  } else if (piletituup === "sooduspilet") {
    console.log("Pileti hind: 8 eurot");
  }
}