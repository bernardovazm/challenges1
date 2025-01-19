function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    
    if (numero === 0 || numero === 1) {
        return true;
    }
    
    let proximo = a + b;
    
    while (proximo <= numero) {
        if (proximo === numero) {
            return true;
        }
        a = b;
        b = proximo;
        proximo = a + b;
    }
    
    return false;
}

const numeroInformado = 21;
if (verificaFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} NÃO pertence à sequência de Fibonacci.`);
}