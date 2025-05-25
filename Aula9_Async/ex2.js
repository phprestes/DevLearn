async function buscarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const listaDeNomes = ['Ana', 'Carlos', 'João', 'Maria', 'Pedro'];
            resolve(listaDeNomes);
            reject(new Error('Falha na conexão'));
        }, 5000);
    });
}