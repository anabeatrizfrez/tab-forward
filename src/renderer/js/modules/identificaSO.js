export function identificaSO() {
    const { plataforma } = window.sistema.pegaSO();

    switch (plataforma) {
        case 'win32': return 'windows';
        case 'linux': return 'linux';
        case 'darwin': return 'macos';
    };
}