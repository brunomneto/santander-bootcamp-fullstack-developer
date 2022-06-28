/*  
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
*/

function comparaNumeros(a, b) {
    if (!a || !b) return 'Defina dois números!';

    let ehIgual = "não são";
    let comparaDez = "menor";
    let comparaVinte = "menor";
    const soma = a + b;

    if (a === b) {
        ehIgual = "são";
    }

    if (soma > 10) {
        comparaDez = "maior";
    }

    if (soma > 20) {
        comparaVinte = "maior";
    }

    return `Os números ${a} e ${b} ${ehIgual} iguais. Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(20, 22));
