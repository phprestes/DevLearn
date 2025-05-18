const pessoas = []

function adicionarPessoa() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;

    if (!nome || !idade || !peso) {
        alert('Preencha todos os campos corretamente!');
        return;
    }

    const pessoa = {nome, idade, peso}
    pessoas.push(pessoa);

    alert(`${nome} cadastrado.`);
    atualizarPessoas();
}

function atualizarPessoas() {
    const lista = document.getElementById('lista-pessoas');
    lista.innerHTML = '';

    pessoas.forEach(pessoa => {
        const item = document.createElement('li');
        item.textContent = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Peso: ${pessoa.peso}`;
        lista.appendChild(item);
    });
}