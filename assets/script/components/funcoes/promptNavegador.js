import { identificaSO } from '../funcoes/identificaSO.js';
const so = identificaSO();

export function promptNavegador(navegador) {
  
    switch (so) {
        case 'windows':
            switch (navegador) {
                case 'chrome': return 'start chrome';
                case 'edge': return 'start msedge';
                case 'firefox': return 'start firefox'; 
                case 'opera': return 'start opera'; 
            }
            break;
        
        case 'linux' :
            switch (navegador) {
                case 'chrome': return 'google-chrome';
                case 'edge': return 'microsoft-edge';
                case 'firefox': return 'firefox'; 
                case 'opera': return 'opera'; 
            }
            break;
        
        case 'macos' :
            switch (navegador) {
                case 'chrome': return 'open -a "Google Chrome"';
                case 'edge': return 'open -a "Microsoft Edge"';
                case 'firefox': return 'open -a "Firefox"'; 
                case 'opera': return 'open -a "Opera"'; 
            }
            break;
    }
};