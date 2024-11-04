estadoPergunta = [];
totalDePerguntas = pergunta.length - 1;
for (let i = 0; i <= totalDePerguntas; i++) {
    estadoPergunta[i] = i;
}

estadoPergunta.sort(()=> Math.random() - 0.5); // Num de forma aleatoria
estado = 0;
tentativas = 2;

mudarOrdem = [0,1,2,3];
mudarOrdem.sort(()=> Math.random() - 0.5);

txtTentativas.innerText = 0;
txtEstado.innerText = 0;
txtPerguntas.innerText = 0;

h2.innerText = pergunta[estadoPergunta[estado]];
alt1.value = alternativas[estadoPergunta[estado]][mudarOrdem[0]];
alt2.value = alternativas[estadoPergunta[estado]][mudarOrdem[1]];
alt3.value = alternativas[estadoPergunta[estado]][mudarOrdem[2]];
alt4.value = alternativas[estadoPergunta[estado]][mudarOrdem[3]];

txtAlt1.innerText = alternativas[estadoPergunta[estado]][mudarOrdem[0]];
txtAlt2.innerText = alternativas[estadoPergunta[estado]][mudarOrdem[1]];
txtAlt3.innerText = alternativas[estadoPergunta[estado]][mudarOrdem[2]];
txtAlt4.innerText = alternativas[estadoPergunta[estado]][mudarOrdem[3]];

