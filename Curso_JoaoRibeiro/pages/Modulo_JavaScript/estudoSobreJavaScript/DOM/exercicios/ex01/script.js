/*Objetivo do exercicio

ao clicar no botão, devemos mudar a cor de fundo da caixa de texto prinçipal*/

let caixa = document.querySelector(".caixa");
let botao = document.querySelector("button");

function executar(event){
    caixa.classList.add('cor-fundo-caixa')
    console.log('click');
    botao.removeEventListener('click', executar)
}

botao.addEventListener('click', executar)