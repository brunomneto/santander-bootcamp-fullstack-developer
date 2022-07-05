
//Função anônima

const soma = function (a, b) {
    return a + b;
}

soma (1, 2);

//Função autoinvocável

(
    function() {
        let name = "Hello World"
        return name;
    }
)();

//Com parâmetros

(
    function(a, b) {
        return a + b;
    }
)(1, 2);

//Armazenada em variável

const soma3 = (
    function (a, b) {
        return a + b;
    } 
)(1,2);

console.log(soma3);

//Callback - função passada como argumento para outra

const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const sum = function(num1, num2){
    return num1 + num2;
}

const sub = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(sum, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub);// -1
console.log(resultSoma);// 3

//Objeto "arguments"
//Um array com todos os parâmetros passados quando a função foi invocada

function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

//Arrays
//Spread: uma forma de lidar separadamente com os elementos

function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); //técnica de spread, basta chamar a função e utilizar o "..."

//Rest: combina argumentos em um array

function confereTamanho(...args) {
    console.log(args.length);
}

confereTamanho();
confereTamanho(1, 2);
confereTamanho(3, 4, 5);

//Objetos
//Object Destructuring: entre chaves {}, podemos filtar apenas os dados que nos interessam em um objeto

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe',
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(user); //42
getFullName(user); //John Doe

//Switch/case : ideal para se comparar muitos valores
//equivale a uma comparação de tipo e valor (===)
//precisa de um valor "default"

function getAnimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}

getAnimal(1); //cão
getAnimal(4); // peixe
getAnimal("1"); //peixe


//This
//palavra reservada this é uma referência de contexto.
//No exemplo, refere-se ao objeto pessoa:

const pessoa = {
    firstName: "André",
    lastName : "Soares",
    id       : 1,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },                                                    // função dentro de um objeto: método.
    getId: function() {
        return this.id;
    }
};

pessoa.fullName(); // "André Soares"
pessoa.getId(); // 1

//Call 

const person = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(animal); // "Murphy"

//Apply

const amigo = {
    nome: 'João',
};

const pet = {
    nome: 'Lika',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.apply(animal); // "Murphy"

// é possível mandar os parâmetros para essa função dentro de um array

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 5]); // 12

//Bind: clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro

const retornaNomes = function () {
    return this.nome;
}

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno(); // Bruno


//Arrow function

const helloworld = function() {
    return "Hello World";
}

// passa a ser:

const helloworld2 = () => "Hello World";

//caso exista apenas uma linha, pode dispensar as chaves e o return.
//caso exista apenas um parâmetro, pode dispensar os parêntesis.
//não pode usar apply, call e bind
//não existe o objeto "arguments"
//construtor (ex: new MeuObjeto()) não pode ser utilizado
