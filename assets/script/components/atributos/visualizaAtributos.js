import { pegaAtributos } from './pegaAtributos.js';
import { gerarUrls } from '../funcoes/gerarUrls.js';

function exibirUrls(urls) {
    const container = document.querySelector('#resultado_urls');
    const ol = document.createElement('ol');
    
    container.textContent = '';
    container.appendChild(ol);

    urls.forEach((url) => {
        const li = document.createElement('li');
        li.textContent = url;
        ol.appendChild(li);
    });
}

export function visualizaAtributos() {
    document.querySelector('#button_pre_visualizar').addEventListener('click', function() {
        
        const dados = pegaAtributos();
        const urls = gerarUrls(dados);

        if (!urls[0].startsWith('http')) return;

        exibirUrls(urls);
    });
}