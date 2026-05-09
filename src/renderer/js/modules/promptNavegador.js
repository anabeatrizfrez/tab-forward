import { identificaSO } from './identificaSO.js';

const comandos = {
    windows: {
        chrome:  'start chrome',
        edge:    'start msedge',
        firefox: 'start firefox',
        opera:   'start opera'
    },
    linux: {
        chrome:  'google-chrome',
        edge:    'microsoft-edge',
        firefox: 'firefox',
        opera:   'opera'
    },
    macos: {
        chrome:  'open -a "Google Chrome"',
        edge:    'open -a "Microsoft Edge"',
        firefox: 'open -a "Firefox"',
        opera:   'open -a "Opera"'
    }
};

export function promptNavegador(navegador) {
    const so = identificaSO();
    return comandos[so]?.[navegador] || null;
}