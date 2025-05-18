function calcular() {
    let op = document.querySelector('#op').value.trim();
    let n1 = document.querySelector('#n1').value;
    let n2 = document.querySelector('#n2').value;
    let n_res;

    switch (op) {
        case "+":
            n_res = n1 + n2;
            break;
        case "-":
            n_res = n1 - n2;
            break;
        case "*":
            n_res = n1 * n2;
            break;
        case "/":
            n_res = n1 / n2;
            break;
        default:
            document.querySelector('#res').innerHTML = "Operação Inválida";
            return;
    }

    document.querySelector('#res').innerHTML = `O resultado é ${n_res}`
}