//Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
//Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)


//Solução 1
//separa a string em letras, transformando em array, inverte a ordem das letras e concatena novamente. 
//Depois, compara e retorna true ou false

function ehPalindromo(string){
    if (!string) return "string não existe";

    return console.log(string.split("").reverse().join("") === string);
}


//Solução 2
//Através de um for, compara a primeira letra com a última, a segunda com a antepenúltima, assim por diante, usando a posição/índice das letras dentro da string.
//No fim, retorna true ou false.

function ehPalindromo2(string) {
    if (!string) return "string não existe";
    if (!string.length) return;

    for (var i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return console.log(false);
        }
    }
    
    return console.log(true);
}

let palavra = "ama"

ehPalindromo(palavra);
ehPalindromo2(palavra);

