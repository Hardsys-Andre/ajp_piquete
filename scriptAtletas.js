 // Função para exibir a camada com texto
 function mostrarCamada(texto) {
    // Pegue a referência da camada e do texto
    var camada = document.getElementById('camada');
    var textoCamada = document.getElementById('textoCamada');

    // Defina o texto da camada
    textoCamada.textContent = texto;

    // Exiba a camada
    camada.style.display = 'block';
}

// Função para ocultar a camada
function fecharCamada() {
    // Pegue a referência da camada
    var camada = document.getElementById('camada');

    // Oculte a camada
    camada.style.display = 'none';
}