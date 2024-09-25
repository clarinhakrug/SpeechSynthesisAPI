function lerDescricao(botao) {
    // Interrompe qualquer fala em andamento antes de iniciar uma nova
    window.speechSynthesis.cancel();

    // Captura o texto alternativo (alt) da imagem dentro do mesmo div do botão clicado
    const descricaoImagem = botao.parentElement.querySelector('img').alt;

    // Chama a função para ler o texto
    lerTexto(descricaoImagem);
}

function lerTexto(texto) {
    // Cria um novo objeto de fala
    const mensagem = new SpeechSynthesisUtterance(texto);

    // Define a voz e outras configurações de fala
    mensagem.lang = 'pt-BR'; // Define a língua como português
    mensagem.pitch = 1; // Tom da voz (1 é padrão)
    mensagem.rate = 1; // Velocidade da fala (1 é padrão)

    // Lê o texto em voz alta
    window.speechSynthesis.speak(mensagem);
}