import { identificaSO } from './components/funcoes/identificaSO.js';
const so = identificaSO();

import { verificaCheckBox } from './components/funcoes/verificaCheckBox.js';
verificaCheckBox();

import { pegaAtributos } from './components/atributos/pegaAtributos.js';
pegaAtributos();

//import { transformaAtributos } from './components/atributos/transformaAtributos.js';
//transformaAtributos();

import { visualizaAtributos } from './components/atributos/visualizaAtributos.js'
visualizaAtributos();

import { adicionaElementos } from './components/elementos/adicionaElementos.js';
adicionaElementos();

console.log('SO detectado:', so);

import { programa } from './components/programa.js';
programa();