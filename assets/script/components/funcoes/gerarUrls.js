import { transformaUrl } from './transformaUrl.js';
import { verificaDia } from './verificaDia.js';
import { estado } from './estado.js';

function calculaValor(base, direcao, iteracao, passo = 1) {
    (direcao === 'sobe') ? base += (iteracao * passo) : base -= (iteracao * passo);
    return base;
}

export function gerarUrls(dados) {
    const urls = [];

    const url_input = dados.url;
    const qtde_abas = parseInt(dados.qtde_abas);

    const base_dia = parseInt(dados.dia) || 0;
    const base_id = parseInt(dados.id) || 0;
    const passo_data = parseInt(dados.passo_data) || 1;
    const passo_id = parseInt(dados.passo_id) || 1;
    const direcao_data = dados.direcao_data;
    const direcao_id = dados.direcao_id;

    const paramsCustom = [];

    for (let i = 1; i <= estado.aux; i++) {
        const nomeEl    = document.querySelector(`#form_id_${i}`);
        const valorEl   = document.querySelector(`#form_valor_${i}`);
        const direcaoEl = document.querySelector(`#form_direcao_${i}`);

        if (!nomeEl?.value) continue;

        paramsCustom.push({
            nome: nomeEl.value,
            valor: parseInt(valorEl.value) || 0,
            direcao: direcaoEl.value
        });
    }

    for (let i = 0; i < qtde_abas; i++) {

        const dataCalculada = verificaDia(
            base_dia,
            parseInt(dados.mes),
            parseInt(dados.ano),
            direcao_data,
            i,
            passo_data
        );

        const variaveis = {
            ...dados,
            dia: dataCalculada.dia,
            mes: dataCalculada.mes,
            ano: dataCalculada.ano,
            id:  calculaValor(base_id, direcao_id, i, passo_id),
        };

        for (const p of paramsCustom) {
            variaveis[p.nome] = calculaValor(p.valor, p.direcao, i, 1);
        }

        const url = transformaUrl(url_input, variaveis);
        urls.push(url);
    }

    return urls;
}