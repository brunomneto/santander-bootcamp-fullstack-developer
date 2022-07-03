/* 
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.
Exemplo: 

Input -> [1, 3, 4, 6, 80, 33, 23, 90]
Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []
Output -> -1
*/

function trocapar(array) {
    if (!array) return -1; //verificação de caso null
    if (!array.length) return -1; //verifica se array é vazio

    for (let i = 0; i < array.length; i++ ) {
        if (array[i] === 0) {
            console.log(`O ${i + 1}º número já é zero.`);
        } else if (array[i] % 2 === 0) {
            console.log(`Realizando a substituição de ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return `A lista final é: [${array}]`;
}


let lista = [0, 0, 1, 3, 4, 6, 80, 33, 23, 90];
console.log(trocapar(lista));
