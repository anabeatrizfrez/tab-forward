export function salvaDados(dados) {
    localStorage.setItem('dados', JSON.stringify(dados));
}

export function recuperaDados() {
    window.addEventListener('DOMContentLoaded', () => {

        const dados = JSON.parse(localStorage.getItem('dados'));
        if (!dados) return;
        
        Object.keys(dados).forEach((chave) => {
            const elemento = document.querySelector(`[name="${chave}"]`);
            if (elemento) {
                elemento.value = dados[chave];
            }
        });

    });
}