/*
Aksel Ratt
05.12.2023
Ülesanne 13
*/

const element = document.getElementById("eemaldaID");

element.removeAttribute("id");
element.setAttribute("attr", "Aksel");

console.log(element.getAttribute("attr"));