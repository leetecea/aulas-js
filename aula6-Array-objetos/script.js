// Array -> Serve pra amarzenar mais de um item numa mesma variável
// Tem metódos e propriedades

let nome = ["Paula", "David", "Rômulo", 100];

for(let itens = 0; itens < nome.length; itens++){
    console.log(`Elemento do index ${itens} tem o nome de ${nome[itens]}`);
}

//Para pegar um elemento específico:
// console.log(nome[1]); 

// Métodos de um array
let alunos = ["Francisco", "Henrique", "Hugo", "Marcelo", "Bruno"];
console.log(alunos.length) // length: propriedade, diz a quantidade de itens, faz contagem.

// SORT() -> Ordenar/arrumar os elemenetos de um array em oredem alfabétiva ou numérica
console.log("Array padrão:", alunos)
console.log("Colocando em ordem alfabética:", alunos.sort());

let numeros =[2, 1, 5, 6, 3, 0]
console.log("Array padrão:", numeros);
console.log("Números em ordem numérica:", numeros.sort());




