const desligar = document.querySelector(".off");
const ligar = document.querySelector(".on");
const listas = document.querySelectorAll(".lista");
const fecharBtn = document.querySelector("button");

function apagarLuz(){
    document.body.style.backgroundColor = "black";
}

function acenderLuz(){
    document.body.style.backgroundColor = "white";
}

function abrirInformacoes(){
    listas[0].innerText = "Leonardo"
    listas[1].innerText = "Paula"
    listas[2].innerText = "Igor"
    fecharBtn.innerText = "Fechar"
    fecharBtn.style.backgroundColor = "red"
}
