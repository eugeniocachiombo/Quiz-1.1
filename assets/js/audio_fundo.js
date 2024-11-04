let audio;
let isPlaying = false;

document.addEventListener("click", () => {
    if (!isPlaying) {
        audio = new Audio('assets/audio/fundo.mp3');
        audio.loop = true; 

        audio.play().then(() => {
            isPlaying = true; 
        }).catch(error => {
            console.error('Erro ao reproduzir áudio:', error);
        });
    } else {
       // audio.pause(); // Pausa o áudio
       // isPlaying = false; // Atualiza o estado
    }
});
