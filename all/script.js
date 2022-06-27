for(let numero = 0; numero <=10; numero++){
  console.log(numero);
}

//1ª função com For loop - Loop dentro de uma função

function incrementar (numero){
  for(let contador = numero; contador <= 10; contador++){
      console.log("O número é:", contador);
      console.log(`O número é ${contador}`);
  }
}
incrementar(2);
incrementar(6);

//2ª Função com condicionais

function media(nota1, nota2, nota3, nota4){
  const notaFinal = (nota1 
    + nota2 + nota3 + nota4) / 4;
    console.log(`Sua nota final é:" ${notaFinal}`);
}

media();

function mediaGeral(notaA, notaB){
  const resultado = (notaA 
    + notaB) / 2;
    if (resultado >= 9){
      console.log(`Sua nota foi ${resultado} - MB (Muito Bom)`);
    }else if(resultado >=7 && resultado < 9){
      console.log(`Sua nota foi ${resultado} - B (Boa)`);
    }else if(resultado >= 6 && resultado < 7){
      console.log(`Sua nota foi ${resultado} - R (Regular)`);
    }else{
      console.log(`Sua nota foi ${resultado} - I (Insuficiente)`);
    }
}