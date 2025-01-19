const fs = require('fs');
const dados = JSON.parse(fs.readFileSync('dados.json', 'utf-8'));

let menorValor = null;
let maiorValor = null;
let soma = 0;
let diasComFaturamento = 0;

dados.forEach(item => {
    const valor = item.valor;
    if (valor > 0) {
        if (menorValor === null || valor < menorValor) {
            menorValor = valor;
        }
        if (maiorValor === null || valor > maiorValor) {
            maiorValor = valor;
        }
        soma += valor;
        diasComFaturamento++;
    }
});

const mediaMensal = soma / diasComFaturamento;

let diasAcimaDaMedia = 0;
dados.forEach(item => {
    if (item.valor > mediaMensal) {
        diasAcimaDaMedia++;
    }
});

// Respostas:
console.log(`Menor faturamento do mês: R$ ${menorValor.toFixed(2)}`);
console.log(`Maior faturamento do mês: R$ ${maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);