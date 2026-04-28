export function dataAtual() {
    const hoje = new Date();

    return {
        dia: hoje.getDate(),
        mes: hoje.getMonth() + 1,
        ano: hoje.getFullYear()
    };
}