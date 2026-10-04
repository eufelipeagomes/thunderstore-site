// Seleciona todas as perguntas da FAQ
const perguntas = document.querySelectorAll(".faq-pergunta");


// Percorre todas as perguntas encontradas
perguntas.forEach(function (pergunta) {

    // Detecta o clique em cada pergunta
    pergunta.addEventListener("click", function () {

        // Pega a resposta que está logo depois da pergunta
        const resposta = pergunta.nextElementSibling;

        // Pega o símbolo + da pergunta
        const simbolo = pergunta.querySelector("span");


        // Verifica se a resposta já está aberta
        if (resposta.style.display === "block") {

            // Fecha a resposta
            resposta.style.display = "none";

            // Volta o símbolo para +
            simbolo.textContent = "+";

        } else {

            // Abre a resposta
            resposta.style.display = "block";

            // Troca + por -
            simbolo.textContent = "−";

        }

    });

});