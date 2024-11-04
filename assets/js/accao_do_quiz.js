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
    //elemento.innerText = "Resposta Certa <br>";
    informacao.innerHTML += elemento.innerText;
    estado = estado + 1;
    h2.innerText = pergunta[estadoPergunta[estado]];
    alt1.value = alternativas[estadoPergunta[estado]][mudarOrdem[0]];
    alt2.value = alternativas[estadoPergunta[estado]][mudarOrdem[1]];
    alt3.value = alternativas[estadoPergunta[estado]][mudarOrdem[2]];
    alt4.value = alternativas[estadoPergunta[estado]][mudarOrdem[3]];
    txtAlt1.innerText = alternativas[estadoPergunta[estado]][mudarOrdem[0]];
    txtAlt2.innerText = alternativas[estadoPergunta[estado]][mudarOrdem[1]];
    txtAlt3.innerText = alternativas[estadoPergunta[estado]][mudarOrdem[2]];
    txtAlt4.innerText = alternativas[estadoPergunta[estado]][mudarOrdem[3]];
    DesSelecionar();
}

function Errar() {
    let elemento = document.createElement("p");
   // elemento.innerText = "Resposta Errada xxxxxx <br>";
    informacao.innerHTML += elemento.innerText;
    h2.innerText = pergunta[estadoPergunta[estado]];
    alt1.value = alternativas[estadoPergunta[estado]][mudarOrdem[0]];
    alt2.value = alternativas[estadoPergunta[estado]][mudarOrdem[1]];
    alt3.value = alternativas[estadoPergunta[estado]][mudarOrdem[2]];
    alt4.value = alternativas[estadoPergunta[estado]][mudarOrdem[3]];
    txtAlt1.innerText = alternativas[estadoPergunta[estado]][mudarOrdem[0]];
    txtAlt2.innerText = alternativas[estadoPergunta[estado]][mudarOrdem[1]];
    txtAlt3.innerText = alternativas[estadoPergunta[estado]][mudarOrdem[2]];
    txtAlt4.innerText = alternativas[estadoPergunta[estado]][mudarOrdem[3]];
    tentativas -= 1;
    audio = new Audio('assets/audio/erro.mp3');
    audio.play();
    Swal.fire({
        icon: "error",
        title: "Resposta Errada",
        timer: 2000
    });
}

function Jogar() {
    for (i = 0; i < alt.length; i++) {
        if (alt[i].checked) {
            if (alt[i].value == correcta[estadoPergunta[estado]]) {
                Acertar();
            } else {
                Errar();
            }
        }
    }
}

function DesSelecionar() {
    for (i = 0; i < alt.length; i++) {
        if (alt[i].checked) {
            alt[i].checked = false;
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