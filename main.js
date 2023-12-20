    // Função para verificar se o dispositivo é um desktop
    function isDesktop() {
        return window.innerWidth > 768; // Ajuste o valor conforme necessário
    }

    // Função para carregar a imagem apenas se for um desktop
    function loadDesktopImage() {
        var imageElement = document.getElementById('myImage');

        if (isDesktop()) {
            // Se for um desktop, configure o atributo src com o caminho da imagem desejada
            imageElement.src = 'caminho/da/sua/imagem.jpg';
        } else {
            // Caso contrário, você pode optar por não carregar a imagem ou definir uma imagem alternativa
            imageElement.src = 'caminho/da/imagem/alternativa.jpg';
        }
    }

    // Chame a função ao carregar a página
    window.onload = loadDesktopImage;
