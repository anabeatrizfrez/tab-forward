import { estado } from '../modules/estado.js';
import { criaElemento } from '../utils/criaElemento.js';
export function adicionaElementos() {
    const botao = document.querySelector('#button_add_parametros');

    const limite = 5;
    let contador = 0;

    let isFirstClick = true;

    let container = null;
    let containerParams = null;
    let span = null;

    botao.addEventListener('click', function() {
        contador++;
        estado.aux++;

        const formulario = document.querySelector('#form');

        if (isFirstClick) {
            span = criaElemento('span');
            span.classList = 'container__hr all-collumn';

            container = criaElemento('div');
            container.classList = 'container-add-param no-collumn';

            const novoP = criaElemento('p');
            Object.assign(novoP, {
                classList: 'container-add-param__p container__p no-collumn',
                textContent: 'Parâmetros customizados:'
            });

            containerParams = criaElemento('div');
            containerParams.classList = 'container-add-param__params';

            container.appendChild(novoP);
            container.appendChild(containerParams);
            formulario.appendChild(span);
            formulario.appendChild(container);

            isFirstClick = false;
        }

        const newParam = criaElemento('div');
        newParam.classList = 'container-new-param';

        const novoInputNome = criaElemento('input');
        const novoSpan = criaElemento('span');
        const novoInputValor = criaElemento('input');
        const novoSelect = criaElemento('select');
        const novoOptionSubindo = criaElemento('option');
        const novoOptionDescendo = criaElemento('option');
        const novoInputExcluir = criaElemento('input');

        Object.assign(novoInputNome, {
            type: 'text',
            id: `form_id_${contador}`,
            classList: 'container-add-param__input input-style',
            name: `id_${contador}`,
            placeholder: 'nome (ex.: pagina)'
        });

        Object.assign(novoSpan, {
            textContent: '=',
            classList: 'container-add-param__span'
        });

        Object.assign(novoInputValor, {
            type: 'number',
            id: `form_valor_${contador}`,
            classList: 'container-add-param__input input-style',
            name: `valor_${contador}`,
            min: 1,
            placeholder: 'valor'
        });

        Object.assign(novoSelect, {
            id: `form_direcao_${contador}`,
            name: `direcao_${contador}`,
            classList: 'container-add-param__select container__select select--list input-style',
            required: true
        });

        Object.assign(novoOptionSubindo, {
            value: 'sobe',
            textContent: 'Subindo',
            classList: 'container__option up'
        });

        Object.assign(novoOptionDescendo, {
            value: 'desce',
            textContent: 'Descendo',
            classList: 'container__option down'
        });

        Object.assign(novoInputExcluir, {
            type: 'button',
            id: `button_excluir_parametro_${contador}`,
            classList: 'container-add-param__button--remv cursor-pointer',
            value: 'delete'
        });

        novoInputExcluir.addEventListener('click', function() {
            estado.aux--;
            botao.disabled = false;

            if (containerParams.children.length === 1) {
                container.remove();
                span.remove();
                isFirstClick = true;
                container = null;
                span = null;
                containerParams = null;
            } else {
                newParam.remove();
            }
        });

        novoSelect.appendChild(novoOptionSubindo);
        novoSelect.appendChild(novoOptionDescendo);

        newParam.appendChild(novoInputNome);
        newParam.appendChild(novoSpan);
        newParam.appendChild(novoInputValor);
        newParam.appendChild(novoSelect);
        newParam.appendChild(novoInputExcluir);

        containerParams.appendChild(newParam);

        estado.aux == limite ? botao.disabled = true : botao.disabled = false;
    });
}