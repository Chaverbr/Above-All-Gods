const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const caixa = document.querySelector('[data-input]').value;
    
    if (verificaDignidade(caixa)){
        window.location.href = './mestre.html';
    }
})



function verificaDignidade(valor) {
    if (valor.toLowerCase() == 'yato é melhor que talion' || 'yato e melhor que talion') {
        return true;
    }
}