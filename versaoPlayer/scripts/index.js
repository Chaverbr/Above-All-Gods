import { responsivo } from "./cabecalhoResponsivo.js";
import { smoothScrollTo } from "./smoothScroll.js";


const iconeHamburguer = document.querySelector('[data-icone]');
iconeHamburguer.addEventListener('click', responsivo);



// SISTEMA DE ROLAGEM DA NAV 

const menuBar = document.querySelectorAll('.cabeçalho-navbar a[href^="#"]');

menuBar.forEach((item) => {
    item.addEventListener('click', scrollDown);
});


function scrollDown(event) {
    event.preventDefault();

    const item = event.target;
    const id = item.getAttribute('href');
    
    const section = document.querySelector(id).offsetTop;


    smoothScrollTo(0, section);
}

