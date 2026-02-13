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

// Garantir que o ícone volte ao normal se clicar em um link
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