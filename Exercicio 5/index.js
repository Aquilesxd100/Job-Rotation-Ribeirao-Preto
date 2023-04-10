"use strict";
// Inversão de String
function inverterString(texto) {
    let resposta = "";
    for (let c = texto.length - 1; c >= 0; c--) {
        resposta += texto.substring(c, c + 1);
    }
    ;
    return resposta;
}
;
console.log(inverterString("Aquiles54xda"));
