import { pegaAtributos } from './pegaAtributos.js';

export function visualizaAtributos() {

    document.getElementById('button_pre_visualizar').addEventListener('click', function() {
        
        const dados = pegaAtributos();

        console.log(dados);

    });
}