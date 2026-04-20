import { criaLabel, criaInput, criaSelect, criaOption, criaDiv } from './criaElementos.js';
import { excluiElementos } from './excluiElementos.js';
import { pegaAtributos } from '../atributos/pegaAtributos.js';

export function adicionaElementos() {

    let contador = 0;
    
    document.querySelector('#button_add_parametros').addEventListener('click', function() {
        
        contador ++;
        
        const container = criaDiv();

        const formulario = document.querySelector('#form');
        const botao = document.querySelector('#button_add_parametros');

        const novoLabel = criaLabel();
        const novoInputNome = criaInput();
        const novoInputValor = criaInput();

        const novoSelect = criaSelect();
        const novoOptionSubindo = criaOption();
        const novoOptionDescendo = criaOption();

        const novoInputExcluir = criaInput();

        Object.assign(novoLabel, {
            htmlFor:  `form_label_${contador}`,
            textContent: 'Parâmetros customizados'
        });

        Object.assign(novoInputNome, {
            type: 'text',
            id: `form_id_${contador}`,
            name: `id_${contador}`,
            placeholder: `id_${contador}`
        });

        Object.assign(novoInputValor, {
            type: 'number',
            id: `form_valor_${contador}`,
            name: `valor_${contador}`,
            min: 1,
            placeholder: `valor_${contador}`
        });

        Object.assign(novoSelect, {
            id: `form_direcao_${contador}`,
            name: `direcao_${contador}`,
            required: true
        });

        Object.assign(novoOptionSubindo, {
            value: "sobe",
            textContent: 'Subindo'
        });

        Object.assign(novoOptionDescendo, {
            value: "desce",
            textContent: 'Descendo'
        });

        Object.assign(novoInputExcluir, {
            type: 'button',
            id: `button_excluir_parametro_${contador}`,
            classList: 'button_excluir_parametro',
            value: 'Icon Lixeira'
        });

        excluiElementos(novoInputExcluir, container);

        container.appendChild(novoLabel);
        container.appendChild(novoInputNome);
        container.appendChild(novoInputValor);

        novoSelect.appendChild(novoOptionSubindo);
        novoSelect.appendChild(novoOptionDescendo);
        container.appendChild(novoSelect)

        container.appendChild(novoInputExcluir);

        formulario.insertBefore(container, botao);
    });

}