/*
Aksel Ratt
02.12.2023
Ülesanne 9
*/

// Erinevad funktsioonid
function nimi() {
    return "Aksel";
}

nimi();

const noolFunktsioon = () => {
    return "Aksel";
}

noolFunktsioon();

// Argumendiga funktsioon
function kuupaevEesti(kuupaev) {
    console.log(kuupaev.toLocaleDateString("et-EE"));
}

kuupaevEesti(new Date());

// Teadmata hulk
function arvudeKoguarvJaKeskmine(...arvud) {

    const koguarv = arvud.reduce((sum, arv) => sum + arv, 0); // Liidab kokku kõik antud arvud

    const keskmine = koguarv / arvud.length;

    return `Koguarv on ${koguarv}. Keskmine on ${keskmine}`;
}

const tulemus = arvudeKoguarvJaKeskmine(1, 2, 3);
console.log(tulemus);

// Salajane sõnum
const salajaneSonum = (sonum) => {
    const salajaneVersioon = sonum.replace(/[aeiou]/gi, "*"); // Asendab täishäälikud tärniga (gi - global case-insensitive)
    
    return salajaneVersioon;
}

const algneSonum = "Aksel";
const salajaneVersioon = salajaneSonum(algneSonum);
console.log(salajaneVersioon);

// Unikaalsed nimed
const leiaUnikaalsedNimed = (nimed) => {
    const unikaalsedNimedSet = new Set(nimed); // See tuvastab topelt nimed

    return unikaalsedNimedSet;
}

const nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
const unikaalsedNimed = leiaUnikaalsedNimed(nimed);
console.log(unikaalsedNimed);