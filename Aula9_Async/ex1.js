const valores = [1, 2, 3, 4];
console.log(filtrar(valores, (x) => x > 2));

function filtrar(vetor, condicao) {
    const novo = [];

    for (const elem of vetor) {
        if (condicao(elem)) {
            novo.push(elem);
        }
    }

    return novo;
}