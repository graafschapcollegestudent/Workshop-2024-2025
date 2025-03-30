document.addEventListener("DOMContentLoaded", function () {
    let winkelmandje = JSON.parse(localStorage.getItem("winkelmandje")) || [];
    const winkelwagenInhoud = document.getElementById("winkelwagen-inhoud");

    if (winkelmandje.length === 0) {
        winkelwagenInhoud.innerHTML = "<p>Je winkelwagen is leeg.</p>";
    } else {
        winkelmandje.forEach((item, index) => {
            const gerechtDiv = document.createElement("div");
            gerechtDiv.classList.add("gerecht-item");
            gerechtDiv.innerHTML = `
                <img src="${item.afbeelding}" alt="${item.naam}" style="width:80px;">
                <span>${item.naam} (${item.aantal}x)</span>
                <button onclick="verwijderItem(${index})">❌</button>
            `;
            winkelwagenInhoud.appendChild(gerechtDiv);
        });
    }

    document.getElementById("bestellen").addEventListener("click", function () {
        alert("Bestelling geplaatst! 🎉");
        localStorage.removeItem("winkelmandje"); // Winkelwagen legen
        window.location.href = "Gerechten.html"; // Terug naar menu
    });
});

function verwijderItem(index) {
    let winkelmandje = JSON.parse(localStorage.getItem("winkelmandje")) || [];
    winkelmandje.splice(index, 1);
    localStorage.setItem("winkelmandje", JSON.stringify(winkelmandje));
    location.reload(); // Pagina vernieuwen om de wijziging te tonen
}
