export function pegaAtributos() {
    const url = document.querySelector('#input_url').value;
    
    const form = document.querySelector('#form');
    const formData = new FormData(form);

    const navegador = document.querySelector('#select_navegador').value

    const dados = {url, navegador};

    formData.forEach((valor, chave) => {
        dados[chave] = valor;
    });

    return dados;
}