export function diasNoMes(mes, ano) {
    return new Date(ano, mes, 0).getDate();
}