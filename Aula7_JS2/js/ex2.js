const tarefas = [];
function adicionarTarefa() {
    const input = document.getElementById('tarefa-input').value.trim();
    if (input) {
        tarefas.push(input);
        
        document.getElementById('lista-tarefas').innerHTML = '';
        console.log("Tarefas:");
        tarefas.forEach((tarefa, index) => {
            const item = document.createElement('li');
            item.textContent = tarefa;
            document.getElementById('lista-tarefas').appendChild(item);

            console.log(`${index + 1}. ${tarefa}`);
        });
    }
}