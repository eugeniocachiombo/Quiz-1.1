function FimPorAcertos() {
    if (estado == totalDePerguntas) {
        window.location = "fim_acertos.html";
    }
}

function FimPorErros() {
    if (tentativas < 1) {
        window.location = "fim_erros.html";
    }
}

function Informacao() {
    txtTentativas.innerText = tentativas;
    txtEstado.innerText = estado;
    txtPerguntas.innerText = pergunta.length;
}

function Acertar() {
    FimPorAcertos();
    let elemento = document.createElement("p");
    elemento.innerText = "Resposta Certa <br>";
    informacao.innerHTML += elemento.innerText;
    estado = estado + 1;
    h2.innerText = pergunta[estado];
    alt1.value = alternativas[estado][0];
    alt2.value = alternativas[estado][1];
    alt3.value = alternativas[estado][2];
    alt4.value = alternativas[estado][3];
    txtAlt1.innerText = alternativas[estado][0];
    txtAlt2.innerText = alternativas[estado][1];
    txtAlt3.innerText = alternativas[estado][2];
    txtAlt4.innerText = alternativas[estado][3];
}

function Errar() {
    let elemento = document.createElement("p");
    elemento.innerText = "Resposta Errada xxxxxx <br>";
    informacao.innerHTML += elemento.innerText;
    h2.innerText = pergunta[0];
    alt1.value = alternativas[estado][0];
    alt2.value = alternativas[estado][1];
    alt3.value = alternativas[estado][2];
    alt4.value = alternativas[estado][3];
    txtAlt1.innerText = alternativas[estado][0];
    txtAlt2.innerText = alternativas[estado][1];
    txtAlt3.innerText = alternativas[estado][2];
    txtAlt4.innerText = alternativas[estado][3];
    tentativas -= 1;
}

function Jogar() {
    for (i = 0; i < alt.length; i++) {
        if (alt[i].checked) {
            if (alt[i].value == correcta[estado]) {
                Acertar();
            } else {
                Errar();
            }
        }
    }
}

btn.addEventListener("click", () => {
    Jogar();
})

setInterval(() => {
    FimPorErros();
}, 1000);

setInterval(() => {
    Informacao();
}, 100);