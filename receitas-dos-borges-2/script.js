const campoPesquisa = document.getElementById("campoPesquisa");
const secoes = document.querySelectorAll("#receitas > h2");
const cards = document.querySelectorAll(".card"); 
cards.forEach(function(card) 
{ card.addEventListener("click", function() { card.classList.toggle("aberto"); }); });

campoPesquisa.addEventListener("input", function () {

    const pesquisa = campoPesquisa.value.toLowerCase().trim();

    secoes.forEach(function (titulo) {

        const cardsContainer = titulo.nextElementSibling;
        const cards = cardsContainer.querySelectorAll(".card");

        let encontrou = false;

        cards.forEach(function (card) {

            const nome = card.querySelector("h3").textContent.toLowerCase();

            if (nome.includes(pesquisa)) {
                card.style.display = "";
                encontrou = true;
            } else {
                card.style.display = "none";
            }

        });

        // Esconde o título da categoria se nenhum resultado aparecer
        if (encontrou || pesquisa === "") {
            titulo.style.display = "";
            cardsContainer.style.display = "";
        } else {
            titulo.style.display = "none";
            cardsContainer.style.display = "none";
        }

    });

});



