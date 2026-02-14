//  Menu Hamburguer
const btnMenu = document.getElementById("btnMenu");
const body = document.body;

function toggleMenu() {
    const nav = document.getElementById("nav");
    const icon = btnMenu.querySelector("i"); // Seleciona o ícone dentro do botão

    const isMenuOpen = nav.classList.toggle('active');

    if (isMenuOpen) {
        body.style.overflow = 'hidden';
        // Muda para o ícone de FECHAR
        icon.classList.replace('bi-list', 'bi-x-lg');
    } else {
        body.style.overflow = 'auto';
        // Volta para o ícone de MENU
        icon.classList.replace('bi-x-lg', 'bi-list');
    }
}

btnMenu.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById("nav");
        const icon = btnMenu.querySelector("i");

        nav.classList.remove('active');
        body.style.overflow = 'auto';
        icon.classList.replace('bi-x-lg', 'bi-list');
    });
});

// Otimização video
document.addEventListener("DOMContentLoaded", function () {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (video) {
                if (video.isIntersecting) {
                    // Quando o vídeo aparece na tela, troca data-src por src
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }

                    video.target.load(); // Carrega o vídeo
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target); // Para de observar este vídeo
                }
            });
        });

        lazyVideos.forEach(function (lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});