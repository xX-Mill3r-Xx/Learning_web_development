//Funçoes em JS

/*function nome_da_funcao(){
    codigo a ser executado
} */

//como escrever e chamar uma função
function escrever(){
    console.log('Aqui esta a frase desta função');
}
escrever()

//função com parametros
function escreverMSG(mensagem){
    console.log(mensagem);
}
escreverMSG("Olá, Mundo")

//função com parametro e com retorno
function adicionar(a, b){
    return a+b
}
let resultado = adicionar(100,200)
console.log("Resultado: " + resultado);

//funçoes com valores padrao
function saudacao(mensagem1 = "Bom dia"){
    console.log(mensagem1);
}

saudacao()
saudacao("Boa noite")
//--------------------------------------------------------
//FUNCTIONS EXPRESSIONS
let escrever2 = function(){
    console.log("Olá, Mundo -> function expression");
}
escrever2()

//Arron function
let funcao1 = () => {
    console.log("função com Arrow function");
}
funcao1()

//arron functions com parametros
let funcao2 = (a,b) => {
    return a+b
}
console.log(funcao2(10,20));

//mais simples
let adicao = (a,b) => a+b
console.log(adicao(20,30));

let escrevermsg2 = mensagem2 => console.log(mensagem2);
escrevermsg2("arrow function mensagem")
escrevermsg2("Java script é fantastico")