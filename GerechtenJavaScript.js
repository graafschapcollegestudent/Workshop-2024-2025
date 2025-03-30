document.addEventListener("DOMContentLoaded", function () {
    updateWinkelwagenAantal();

    function updateWinkelwagenAantal() {
        let winkelmandje = JSON.parse(localStorage.getItem("winkelmandje")) || [];
        let totaalAantal = winkelmandje.reduce((sum, item) => sum + item.aantal, 0);

        document.getElementById("winkelwagenAantal").innerText = totaalAantal;
    }

    document.querySelectorAll(".gerechten a").forEach(knop => {
        knop.addEventListener("click", function (event) {
            event.preventDefault();

            const gerechtElement = knop.closest(".gerechten");
            const gerechtNaam = gerechtElement.querySelector("h2").innerText;
            const aantal = parseInt(gerechtElement.querySelector("input[type='number']").value);
            const afbeelding = gerechtElement.querySelector("img").src;

            let winkelmandje = JSON.parse(localStorage.getItem("winkelmandje")) || [];
            let bestaandGerecht = winkelmandje.find(item => item.naam === gerechtNaam);

            if (bestaandGerecht) {
                bestaandGerecht.aantal += aantal;
            } else {
                winkelmandje.push({ naam: gerechtNaam, aantal: aantal, afbeelding: afbeelding });
            }

            localStorage.setItem("winkelmandje", JSON.stringify(winkelmandje));
            updateWinkelwagenAantal();
            alert(`${gerechtNaam} (${aantal}x) toegevoegd aan winkelmandje!`);
        });
    });
});
