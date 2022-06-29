// desafio if/else

let idade = 18;
if (idade > 18) {
  console.log("Pessoa maior de 18 anos");
}else{
  console.log("Não é maior de 18 anos")
}

let maiorDeIdade = 23;
let condicaoHumana = true;
if (maiorDeIdade > 18 && (condicaoHumana = true)) {
  console.log("Humano com maior de 18 anos");
}

let mesDeAniversario = "dezembro";
if ((mesDeAniversario = "janeiro") || (mesDeAniversario = "dezembro")){
  console.log("Você faz aniversário em Janeiro ou em Dezembro!")
}