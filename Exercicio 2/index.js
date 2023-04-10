"use strict";
// Sequencia de Fibonacci
function sequenciaFibonacci(numero) {
    let valoresAnteriores = [0, 1];
    let valorAtual = 0;
    while (valorAtual < numero) {
        valorAtual = valoresAnteriores[0] + valoresAnteriores[1];
        valoresAnteriores[0] = valoresAnteriores[1];
        valoresAnteriores[1] = valorAtual;
    }
    ;
    if (valorAtual === numero) {
        return `O número ${numero} pertence a sequência de Fibonacci.`;
    }
    return `O número ${numero} não pertence a sequência de Fibonacci.`;
}
;
console.log(sequenciaFibonacci(13));
