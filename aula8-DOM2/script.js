// Entender como capturar os elementos da árvore DOM pelo JS

// getElementyById() -> Retornar o elemento pelo Id

const texto = document.getElementById("paragrafo");
console.log(texto);
console.log(texto.innerText);

// getElementsByClassName() -> Vai pegar pela class e retornar um HTMLCollection

const itens = document.getElementsByClassName("lista");
console.log("Com ClassName:", itens);
console.log(itens[1]);
const transformando = Array.from(itens);
console.log(transformando);

// getElementsByTagName -> Pega o elemento pela tag
const alunos = document.getElementsByTagName("ol")[0];
console.log("Com TagName:", alunos);

console.log(" ");
console.log(" -------------------------------- ");
console.log(" ");

// SELETOR GERAL ÚNICO

const titulo = document.querySelector(".title"); 
// Aceita tudo: Tag, .class ou #id. Precisa especificar o que quer passar. Pega sempre o primeiro h2, mesmo tendo dois
console.log(titulo);
console.log(titulo.innerText); // mostra o contéudo

const titulos = document.querySelectorAll(".title"); // Pega todos os h2
console.log("Com querySelectorAll:", titulos); 