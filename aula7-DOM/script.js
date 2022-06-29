// DOM - Document Object Model
// Manipular Html através do DOM
// método nativo - já existe no JS
// window é um objeto

console.log(window.innerHeight) //altura da janela

let nome = window.prompt("Qual é o seu nome?")

window.alert(`Bem vinda a sua primeira aula com DOM, ${nome}!!`)

console.log("Aqui é o Window", window); //objeto global
console.log("Aqui é o Document", document); //é todo o html

console.log(document.body.style);

document.body.style.backgroundColor = "purple";