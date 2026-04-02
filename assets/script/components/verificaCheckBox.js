import { dataAtual } from './dataAtual.js';
const data = dataAtual();

export function verificaCheckBox() {
    
    document.getElementById('form_data_atual').addEventListener('click', function() {
        
        const checkbox = document.getElementById('form_data_atual');
        const estaMarcado = checkbox.checked
        
        const input_dia = document.getElementById('form_dia')
        const input_mes = document.getElementById('form_mes')
        const input_ano = document.getElementById('form_ano')

        if (estaMarcado == true) {

            input_dia.value = data.dia;
            input_mes.value = data.mes;
            input_ano.value = data.ano;

        } else {

            input_dia.value = null;
            input_mes.value = null;
            input_ano.value = null;

        }
    });
}