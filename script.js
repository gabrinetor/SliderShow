const slide = document.querySelector('.slides');
const slideImagens = document.querySelectorAll('.slides img');

//Botões
const btnAntes = document.querySelector('#btnAntes');
const btnDepois = document.querySelector('#btnDepois');

//Contador
let cont = 1;
const tam = slideImagens[0].clientWidth;

slide.style.transform = 'translateX(' + ( - tam * cont ) + 'px)';

//Botões Acionadores
btnDepois.addEventListener('click', ()=>{
    if(cont >= slideImagens.length - 1) return;
    slide.style.transition = "transform 0.2s ease-in-out";
    cont++;
    slide.style.transform = 'translateX(' + ( - tam * cont ) + 'px)';
});

btnAntes.addEventListener('click', ()=>{
    if(cont <= 0) return;
    slide.style.transition = "transform 0.2s ease-in-out";
    cont--;
    slide.style.transform = 'translateX(' + ( - tam * cont ) + 'px)';
});


slide.addEventListener('transitionend',()=>{
    if(slideImagens[cont].id === 'ultimoClone'){
        slide.style.transition = 'none';
        cont = slideImagens.length -2;
        slide.style.transform = 'translateX(' + ( - tam * cont ) + 'px)';
    }
    if(slideImagens[cont].id === 'primeiroClone'){
        slide.style.transition = 'none';
        cont = slideImagens.length - cont;
        slide.style.transform = 'translateX(' + ( - tam * cont ) + 'px)';
    }
});

console.log(slideImagens.length);