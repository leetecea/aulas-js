// Operadores de Atribuição

let conta = 11;
// conta = conta + 4;
conta += 4;
console.log("Soma:", `${conta}`);

conta -= 5;
console.log("Subtração:", `${conta}`);

conta *= 2;
console.log("Multiplicação:", `${conta}`);

conta /= 4;
console.log("Divisão:", `${conta}`);

conta %= 2;
console.log("Resto da divisão:", `${conta}`);

conta **= 4;
console.log("Expoente:", `${conta}`);

//--------------------------------------------//

// While Loop

let numero = 0;
while(numero <= 10){
    console.log("Repetição com While:", numero);
    numero+=2 ;
}

let numero1 = 10;
while(numero1 >= 0){
    console.log("Repetição com While:", numero1);
    numero1-- ;
}




//--------------------------------------------//

// For Loop (mais utilizado)

//Inicio (criando a variável), condição, incremento
for(let number = 0; number <= 10; number ++){
    console.log("Repetição com For:", number);
}

//Decremento - inicia com 10 e vai diminuindo até 0
for(let numberr = 10; numberr >= 0; numberr--){
    console.log("Repetição com For:", numberr);
}

