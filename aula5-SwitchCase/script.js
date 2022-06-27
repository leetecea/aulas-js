//Switch Case
//Estrutura básica do Switch

let dia = 1;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Nenhum dia");
    break;
}

let food = "Lasanha";
switch (food) {
  case "Lasanha":
    console.log("Não vendemos esta comida aqui.");
    break;
  case "Pizza":
    console.log("Estamos com escassez de pizza.");
    break;
  case "Salada":
    console.log("Aqui está, são 3 reais.");
    break;
  default:
    console.log("Erro!");
    break;
}

let perfume = "Amadeirado";
switch (perfume) {
  case "Floral":
    console.log("Compra efetuada com sucesso");
    break;
  case "Amadeirado":
    console.log("Tem certeza que não prefere outro aroma?");
    break;
  case "Cítrico":
    console.log("Tem certeza que não prefere outro aroma?");
    break;
  case "Frutal":
    console.log("Tem certeza que não prefere outro aroma?");
    break;
  default:
    console.log("Não trabalhamos com este tipo de perfume aqui");
    break;
}

// Switch Case 2

let corFavorita = "Amarelo" || "Azul";
switch (corFavorita) {
  case "Amarelo":
    console.log("Bonito sol");
    break;
  case "Azul":
    console.log("Lindo mar");
    break;
  default:
    console.log("Outra cor");
    break;
}

let nome = ["Mariana", "Leonardo0", "David"];
console.log(nome);
console.log(nome.length);
