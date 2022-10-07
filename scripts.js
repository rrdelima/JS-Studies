// var - problema de escopo - obsoleto
// let - valor dinâmico
// const - constante - valor não muda

let soma = 0;
let somaElem = document.getElementById('soma');

somaElem.innerHTML = soma;

function somar(){
    soma = soma + 1;
    somaElem.innerHTML = soma;
}





