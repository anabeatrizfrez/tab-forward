const { contextBridge } = require('electron');
const os = require('os');
const { exec } = require("child_process");

function executarComando(comando) {
    return new Promise((resolve, reject) => {
        exec(comando, (error, stdout) => {
            error ? reject(error) : resolve(stdout)
        });
    });
};

contextBridge.exposeInMainWorld('sistema', {
    pegaSO: () => ({
        plataforma: os.platform()
    }),

    iniciarSessao: (navegador) => {
        return executarComando(navegador);
    },

    abrirAba: (navegador, url) => {
        return executarComando(`${navegador} ${url}`);
    }
});