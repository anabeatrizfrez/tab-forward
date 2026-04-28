import { adicionaElementos } from './ui/adicionaElementos.js';
import { limpaAtributos } from './ui/limpaAtributos.js';
import { pegaAtributos } from './ui/pegaAtributos.js';
import { programa } from './ui/programa.js';
import { validaAtributos } from './ui/validaAtributos.js';
import { verificaCheckBox } from './ui/verificaCheckBox.js';
import { visualizaAtributos } from './ui/visualizaAtributos.js'
import { identificaSO } from './modules/identificaSO.js';

document.addEventListener('DOMContentLoaded', () => {
    identificaSO(); 
    verificaCheckBox();
    adicionaElementos();
    validaAtributos();
    pegaAtributos();
    visualizaAtributos();
    limpaAtributos();
    programa(); 
});