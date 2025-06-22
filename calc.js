let display = document.getElementById("res");
let botoes = document.querySelectorAll(".bot");

let expressao = "";

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        let valor = botao.innerText;

        if (valor === "C") {
            expressao = "";
            display.innerText = "Digite...";
        }
        else if (valor === "<|") {
            expressao = expressao.slice(0, -1);
            display.innerText = expressao || "Digite...";
        }
        else if (valor === "=") {
            try {
                let expressaoAjustada = expressao.replace(/x/g, "*").replace(/,/g, ".");
                let resultado = eval(expressaoAjustada);
                display.innerText = resultado;
                expressao = resultado.toString();
            } catch (error) {
                display.innerText = "Erro!";
                expressao = "";
            }
        }
        else {
            expressao += valor;
            display.innerText = expressao;
        }
    });
});
