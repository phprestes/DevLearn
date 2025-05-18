let contador = document.querySelector('#contador');

function incrementar() {
    contador.innerHTML = parseInt(contador.innerHTML) + 1;
}

function decrementar() {
    contador.innerHTML = parseInt(contador.innerHTML) - 1;
}