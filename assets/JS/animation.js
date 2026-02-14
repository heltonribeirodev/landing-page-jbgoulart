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


//  Variaveis 
const tl = gsap.timeline();

tl.from("header, .inicio", {
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

tl.from(".icon", {
    opacity: 0,
    y: -10,
    scale: 0.8,
    duration: 0.1
});

tl.from(splitType.chars, {
    opacity: 0,
    filter: "blur(3px)",
    stagger: 0.05,
    duration: 0.1
});


// SECTION ANIMATION

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (elements) => myObserver.observe(elements))