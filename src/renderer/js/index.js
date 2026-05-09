import { identificaSO } from './modules/identificaSO.js';
import { adicionaElementos } from './ui/adicionaElementos.js';
import { dataPadrao } from './ui/dataPadrao.js'
import { recuperaDados } from './ui/guardaDados.js';
import { limpaAtributos } from './ui/limpaAtributos.js';
import { pegaAtributos } from './ui/pegaAtributos.js';
import { programa } from './ui/programa.js';
import { validaAtributos } from './ui/validaAtributos.js';
import { verificaCheckBox } from './ui/verificaCheckBox.js';
import { visualizaAtributos } from './ui/visualizaAtributos.js'

document.addEventListener('DOMContentLoaded', () => {
    recuperaDados();
    identificaSO(); 
    verificaCheckBox();
    adicionaElementos();
    validaAtributos();
    pegaAtributos();
    visualizaAtributos();
    limpaAtributos();
    dataPadrao();
    programa(); 
});