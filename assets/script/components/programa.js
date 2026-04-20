import { pegaAtributos } from './atributos/pegaAtributos.js';
import { transformaURL } from './funcoes/transformaUrl.js';
import { promptNavegador } from './funcoes/promptNavegador.js'
import { delay } from './funcoes/delay.js';

const navegador = promptNavegador();
const botao = document.querySelector('#button_abrir_abas');

export async function programa() {
    
    botao.addEventListener('click', async function() {
        botao.disabled = true;

        const dados = pegaAtributos();
        const url = dados.url;
        const qtde_abas = dados.qtde_abas;

        if (!url.startsWith('http')) return;

        for (let i = 1; i <= qtde_abas; i++) {

            if (dados.direcao_data == 'sobe') {
                
                if (dados.direcao_id == 'sobe') {

                    

                } else {



                }

            } else {

            }
 
            
            window.sistema.abrirAba(navegador, url);

            dia
            id


            await delay(2000);

        };

        console.log(qtde_abas)
        console.log(transformaURL(url, dados))

        botao.disabled = false;
    });
}
