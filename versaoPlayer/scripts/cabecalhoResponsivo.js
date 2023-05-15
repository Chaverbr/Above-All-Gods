export function responsivo() {
    const cabecalho = document.querySelector('[data-cabecalho]');
    const navbarLista = document.querySelector('[data-lista]');
    const nav = document.querySelector('[data-navbar]');

    if (cabecalho.classList.value == 'cabeçalho') {
        cabecalho.classList.remove('cabeçalho');
        cabecalho.classList.add('cabeçalhoAberto');

        nav.classList.remove('cabeçalho-navbar');
        nav.classList.add('cabeçalho-navbarResponsivo');

        navbarLista.classList.remove('displayOff');
        navbarLista.classList.add('displayOn');
    }else {
        cabecalho.classList.remove('cabeçalhoAberto');
        cabecalho.classList.add('cabeçalho');

        nav.classList.remove('cabeçalho-navbarResponsivo');
        nav.classList.add('cabeçalho-navbar');

        navbarLista.classList.remove('displayOn');
        navbarLista.classList.add('displayOff');
    }
}