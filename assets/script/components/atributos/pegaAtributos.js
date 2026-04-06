export function pegaAtributos() {
    
    const form = document.getElementById('form');
    const formData = new FormData(form);

    const dados = {};

    formData.forEach((valor, chave) => {
        dados[chave] = valor;
    });

    return dados;
}