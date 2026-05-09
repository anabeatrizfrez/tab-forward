import { pegaAtributos } from './pegaAtributos.js';
import { gerarUrls } from '../modules/gerarUrls.js';

function exibirUrls(urls) {
    const main = document.querySelector('main');

    let container = main.querySelector('.exibir-urls');
    let ol;

    if (!container) {

        container = document.createElement('div');
        container.classList = 'exibir-urls';
        container.id = 'exibir-urls'

        const p = document.createElement('p');
        Object.assign(p, {
            classList: 'exibir-urls__p container__p',
            textContent: `URLs Geradas:`
        });

        const div = document.createElement('div');
        div.classList = 'exibir-urls__container';

        ol = document.createElement('ol');
        ol.classList = 'exibir-urls__list';
        
        div.appendChild(ol);
        container.appendChild(p);
        container.appendChild(div);
        main.appendChild(container);

    } else {
        ol = container.querySelector('ol');
        ol.innerHTML = '';
    }

    urls.forEach((url) => {
        const li = document.createElement('li');

        li.classList = 'exibir-urls__item';
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