function diasNoMes(mes, ano) {
    return new Date(ano, mes, 0).getDate();
}

export function verificaDia(baseDia, baseMes, baseAno, direcao, iteracao, passo) {
    let dia = baseDia;
    let mes = baseMes;
    let ano = baseAno;

    const incremento = direcao === 'desce' ? - passo : passo;

    for (let i = 0; i < iteracao; i++) {
        dia += incremento;

        while (dia > diasNoMes(mes, ano)) {
            dia -= diasNoMes(mes, ano);
            mes ++;
            if (mes > 12) { mes = 1; ano ++; }
        }

        while (dia < 1) {
            mes --;
            if (mes < 1) { mes = 12; ano --; }
            dia += diasNoMes(mes, ano);
        }
    }

    return { dia, mes, ano };
}