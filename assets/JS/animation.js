//  CONFIGS
document.querySelectorAll('.imageTrabalho video').forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});

const linksNav = document.querySelectorAll('nav a');

linksNav.forEach(link => {
    link.addEventListener('click', function (e) {
        // 1. Impede o comportamento padrão (mudar a URL)
        e.preventDefault();

        // 2. Pega o ID do destino (ex: #Soluções)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // 3. Verifica se o elemento existe e faz a rolagem
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // O -80 é para compensar a altura do seu Header fixo
                behavior: 'smooth'
            });
        }
    });
});


//   

gsap.registerPlugin(ScrollTrigger);

//  Variaveis 
const tl = gsap.timeline();

tl.from("header", {
    opacity:0,
    y:-20,
    duration: .4
})

tl.from(".status", {
    opacity: 0,
    filter:"blur(10px)",
    y: -20,
    duration:.2
})

const textoAnimado = document.querySelectorAll(".textAnimado");
const splitType = new SplitType(textoAnimado, { type: "chars" });

tl.from(splitType.chars, {
    opacity: 0,
    filter: "blur(3px)",
    stagger: 0.05,
    duration: 0.3
});
