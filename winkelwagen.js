document.addEventListener('DOMContentLoaded', function () {
    toonWinkelwagen();
});

// Functie om de winkelwageninhoud weer te geven
function toonWinkelwagen() {
    let winkelwagen = JSON.parse(localStorage.getItem('winkelwagen')) || [];
    const winkelwagenContainer = document.getElementById('winkelwagen-inhoud');
    const totaalPrijsContainer = document.getElementById('totaal-prijs');

    winkelwagenContainer.innerHTML = '';

    if (winkelwagen.length === 0) {
        winkelwagenContainer.innerHTML = '<p>Je winkelwagen is leeg.</p>';
        totaalPrijsContainer.innerHTML = '';
        return;
    }

    let totaalPrijs = 0;

    winkelwagen.forEach((item, index) => {
        let productElement = document.createElement('div');
        productElement.classList.add('gerecht-item');
        totaalPrijs += item.prijs * item.aantal;

        productElement.innerHTML = `
            <span>${item.naam} - €${item.prijs.toFixed(2)} x ${item.aantal}</span>
            <button onclick="verwijderUitWinkelwagen(${index})">❌</button>
        `;
        winkelwagenContainer.appendChild(productElement);
    });

    totaalPrijsContainer.innerHTML = `<h3>Totaal: €${totaalPrijs.toFixed(2)}</h3>`;
}

// Functie om een product uit de winkelwagen te verwijderen
function verwijderUitWinkelwagen(index) {
    let winkelwagen = JSON.parse(localStorage.getItem('winkelwagen')) || [];

    winkelwagen.splice(index, 1);
    localStorage.setItem('winkelwagen', JSON.stringify(winkelwagen));

    toonWinkelwagen();
}

// Functie om door te gaan naar afrekenen
function afrekenen() {
    alert('Je wordt doorgestuurd naar de betaalpagina...');
    window.location.href = 'bedankt.html'; // Dit zou naar de afrekenpagina gaan
}
