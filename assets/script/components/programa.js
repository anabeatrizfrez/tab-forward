import { pegaAtributos } from './atributos/pegaAtributos.js';
import { promptNavegador } from './funcoes/promptNavegador.js';
import { delay } from './funcoes/delay.js';
import { gerarUrls } from './funcoes/gerarURLs.js';

const botao = document.querySelector('#button_abrir_abas');

export async function programa() {

    botao.addEventListener('click', async function () {

        const dados = pegaAtributos();
        const navegador = promptNavegador(dados.navegador);
        const urls = gerarUrls(dados);

        if (!urls[0].startsWith('http')) return;

        try {
            await window.sistema.iniciarSessao(navegador);
        } catch (erro) {
            alert('Navegador não encontrado.');
            console.error(erro);
            return;
        }
        
        botao.disabled = true;
        await delay(1000);

        for (let i = 0; i < urls.length; i++) {
            console.log(urls)
            console.log(`Aba ${i + 1}: ${urls[i]}`); // Validação
            await window.sistema.abrirAba(navegador, urls[i]);
            await delay(2000);
        }

        botao.disabled = false;
    });
}