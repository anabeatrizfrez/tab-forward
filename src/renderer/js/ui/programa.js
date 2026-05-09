import { pegaAtributos } from './pegaAtributos.js';
import { promptNavegador } from '../modules/promptNavegador.js';
import { gerarUrls } from '../modules/gerarUrls.js';
import { delay } from '../utils/delay.js';
import { salvaDados } from './guardaDados.js';

const botao = document.querySelector('#button_abrir_abas');

export async function programa() {

    botao.addEventListener('click', async function () {

        const dados = pegaAtributos();
        const navegador = promptNavegador(dados.navegador);
        const urls = gerarUrls(dados);
        
        if (!urls[0].startsWith('http')) return;

        salvaDados(dados);
        
        try {
            await window.sistema.iniciarSessao(navegador);
        } catch (erro) {
            alert('Navegador não encontrado.');
            return;
        }
        
        botao.disabled = true;
        await delay(1000);

        for (let i = 0; i < urls.length; i++) {
            await window.sistema.abrirAba(navegador, urls[i]);
            await delay(2000);
        }

        botao.disabled = false;
    });
}