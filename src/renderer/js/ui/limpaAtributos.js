import { dataPadrao } from "./dataPadrao.js";

export function limpaAtributos() {
    document.querySelector('#button_limpar').addEventListener('click', () => {
        const exibirUrls = document.querySelector('#exibir-urls');

        document.querySelector('#form').reset();
        document.querySelector('#input_url').value = '';
        document.querySelector('#select_navegador').value = 'chrome';
        dataPadrao();
        if (exibirUrls) { exibirUrls.remove(); };
    });
}