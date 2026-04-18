const { contextBridge } = require('electron');
const os = require('os');
const { exec } = require("child_process");

contextBridge.exposeInMainWorld('sistema', {
    pegaSO: () => ({
        plataforma: os.platform()
    }),

    abrirAba: (navegador, url) => {
        exec(`${navegador} ${url}`);
    }
});