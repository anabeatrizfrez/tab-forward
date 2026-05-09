import { dataAtual } from "../utils/dataAtual.js";
const data = dataAtual();

export function dataPadrao() {
    document.querySelector('#form_dia').value = data.dia;
    document.querySelector('#form_mes').value = data.mes;
    document.querySelector('#form_ano').value = data.ano;
    document.querySelector('#form_data_atual').checked = true;
}