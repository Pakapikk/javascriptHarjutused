/*
Aksel Ratt
02.12.2023
Ülesanne 11
*/

// Nimed
const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];

// Suuredtähed
function capitalizeAllWords(arr) {
  return arr.map((word) => {
    return word.split(" ").map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(" "); // split jagab sõnad osadeks, map teeb iga sõna alguse suureks ja join ühendab kõik kokku
  })
}

console.log(capitalizeAllWords(nimed));

// email
const emailid = [];

for (let i = 0; i < nimed.length; i++) {
  const [eesnimi, perenimi] = nimed[i].split(" ");
  const email = perenimi.toLowerCase() + "@metshein.com";
  emailid.push(email);
}

console.log(emailid);

// Nime otsing
function nimeOtsing(nimi) {
  const otsitavNimi = nimi;
  
  const leitudNimi = nimed.find((i) => i.includes(otsitavNimi)); // i on massiivi element
  
  if (leitudNimi) {
    return "täisnimi - " + leitudNimi;
  } else {
    return "pole";
  }
}

console.log(nimeOtsing("mari")); // väljund: täisnimi - mari maasikas
console.log(nimeOtsing("mario")); // väljund: pole

// Sünniaeg ja vanus
const inimesteAndmed = [
  { nimi: "Mari Maasikas", isikukood: "38705123568" },
  { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
  { nimi: "Kristiina Kukk", isikukood: "39203029876" },
  { nimi: "Margus Mustikas", isikukood: "49807010346" },
  { nimi: "Jaak Järve", isikukood: "39504234985" },
  { nimi: "Kadi Kask", isikukood: "39811136789" },
  { nimi: "Aksel Ratt", isikukood: "39501180860" },
  ];
  
  const vanusJaSunnikuupaev = (isikukood) => {
    const aasta = parseInt(isikukood.slice(1, 3), 10); // sünniaasta numbrid
    const kuu = parseInt(isikukood.slice(3, 5), 10); // sünnikuu numbrid
    const paev = parseInt(isikukood.slice(5, 7), 10); // sünnipäeva numbrid
  
    const sunnikuupaev = new Date(aasta, kuu - 1, paev);
    const tana = new Date();
    const vanus = tana.getFullYear() - sunnikuupaev.getFullYear();
  
    return {
      sunnikuupaev: sunnikuupaev.toLocaleDateString(),
      vanus: vanus,
    }
  }
  
  inimesteAndmed.forEach((inimene) => {
    const { sunnikuupaev, vanus } = vanusJaSunnikuupaev(inimene.isikukood);
    inimene.sunnikuupaev = sunnikuupaev;
    inimene.vanus = vanus;
  })
  
  console.log(inimesteAndmed);
  

// Kaugushüpe
const opilased = [
  { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
  { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
  { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
  { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
  { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
  { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
  { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
  { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
  { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
  { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
  ];

  opilased.forEach((opilane) => {
    const parimTulemus = Math.max(...opilane.tulemused); // ... teeb tulemused eraldi argumentideks
    
    const keskmineTulemus = opilane.tulemused.reduce((i, tulemus) => i + tulemus) / opilane.tulemused.length; // Õpilase tulemus jagatakse massiivi pikkusega
    
    console.log(`${opilane.nimi}: parim tulemus ${parimTulemus} ja keskmine tulemus ${keskmineTulemus.toFixed(2)}`); // Väljastab ja ümardab
  })