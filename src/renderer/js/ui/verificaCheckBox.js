import { dataAtual } from '../utils/dataAtual.js';
const data = dataAtual();

const checkbox = document.querySelector('#form_data_atual');
const input_dia = document.querySelector('#form_dia')
const input_mes = document.querySelector('#form_mes')
const input_ano = document.querySelector('#form_ano')

export function verificaCheckBox() {
    
    checkbox.addEventListener('click', function() {
        const estaMarcado = checkbox.checked
        
        input_dia.value = estaMarcado ? data.dia : '';
        input_mes.value = estaMarcado ? data.mes : '';
        input_ano.value = estaMarcado ? data.ano : '';
    });
};

function verificaAlteracao() {
    const alterou = input_dia.value != data.dia ||
                    input_mes.value != data.mes ||
                    input_ano.value != data.ano;

    alterou ? checkbox.checked = false : checkbox.checked = true
}

[input_dia, input_mes, input_ano].forEach(input => {
    input.addEventListener('input', verificaAlteracao);
});