import { pegarAtributos } from './pegarAtributos.js';

export function transformarAtributos() {

    document.getElementById('button_pre_visualizar').addEventListener('click', function() {
        
        const dados = pegarAtributos();

        console.log(dados.dia);
        console.log(dados.mes);
        console.log(dados.ano);

    });
}