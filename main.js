// Função para carregar a imagem conforme o tipo de dispositivo
function loadImageBasedOnDevice() {
    var imageElementDesktop = document.getElementById('myImage');
    var imageElementMobile = document.getElementById('myImageMobile');

    if (window.innerWidth > 768) {
        // Se for um desktop, configure o atributo src com o caminho da imagem desejada para desktop
        imageElementDesktop.src = 'https://res.cloudinary.com/dddvuoz7c/image/upload/v1702316381/Site-Poderosa/Banner-desktop/desk_dnc6bj.png';

        // Oculta a imagem para dispositivos mobile
        imageElementMobile.style.display = 'none';
    } else {
        // Se for um dispositivo mobile, configure o atributo src com o caminho da imagem desejada para mobile
        imageElementMobile.src = 'https://res.cloudinary.com/dddvuoz7c/image/upload/v1702316864/Site-Poderosa/Banner-desktop/AnyConv.com___PODEROSA_BELEZA_A_solu%C3%A7%C3%A3o_para_cabelos_danificados_1180x350_jot4kl.webp';

        // Oculta a imagem para desktop
        imageElementDesktop.style.display = 'none';
    }
}

// Chame a função ao carregar a página
window.onload = loadImageBasedOnDevice;
