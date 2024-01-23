/*
Aksel Ratt
05.12.2023
Ülesanne 13
*/

const cardElemendid = document.querySelectorAll(".card");

cardElemendid.forEach(function (card) {
    const pealkiri = card.querySelector("img").getAttribute("data-title");
    const jutt = card.querySelector("img").getAttribute("data-description");

    // Lisab andmed card-body'sse
    card.querySelector(".card-body .card-title").innerText = pealkiri;
    card.querySelector(".card-body .card-text").innerText = jutt;
});