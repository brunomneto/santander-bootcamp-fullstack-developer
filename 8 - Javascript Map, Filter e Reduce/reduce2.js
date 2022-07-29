const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'feijao',
        preco: 15
    },
    {
        name: 'carne',
        preco: 50
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
