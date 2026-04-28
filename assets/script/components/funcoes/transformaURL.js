export function transformaUrl(url, variaveis) {
    return url.replace(/\$\{(\w+)\}/g, (_, nome) => {
        return variaveis[nome] ?? `\${${nome}}`;
    });
}