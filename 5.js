function inverterString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

const stringOriginal = 'Exemplo de string a ser invertida';
const stringInvertida = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);