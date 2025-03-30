document.addEventListener('DOMContentLoaded', function () {
    // Voeg event listeners toe aan de bestelknoppen
    document.querySelectorAll('.bestel-knop').forEach(knop => {
        knop.addEventListener('click', function (event) {
            event.preventDefault();  // Voorkomt dat de pagina herlaadt
            let productId = this.getAttribute('data-product-id');
            let productNaam = this.getAttribute('data-product-naam');
            let productPrijs = parseFloat(this.getAttribute('data-product-prijs'));

            voegToeAanWinkelwagen(productId, productNaam, productPrijs);
        });
    });
});

// Functie om een product toe te voegen aan de winkelwagen
function voegToeAanWinkelwagen(productId, productNaam, productPrijs) {
    let winkelwagen = JSON.parse(localStorage.getItem('winkelwagen')) || [];

    let bestaandProduct = winkelwagen.find(item => item.id === productId);

    if (bestaandProduct) {
        bestaandProduct.aantal += 1;
    } else {
        winkelwagen.push({ id: productId, naam: productNaam, prijs: productPrijs, aantal: 1 });
    }

    localStorage.setItem('winkelwagen', JSON.stringify(winkelwagen));
    alert(`${productNaam} toegevoegd aan de winkelwagen!`);
}
