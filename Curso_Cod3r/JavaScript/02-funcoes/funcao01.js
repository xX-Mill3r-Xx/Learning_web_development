console.log(typeof(Object)); // um objeto em js é uma função

class Produto {}
console.log(typeof(Produto)); // uma classe tambem é uma função

//-- Exemplos basicos de funçoes -- //

//Função sem retorno
function semRetorno (a, b){
    console.log(a + b);
    console.log("esta função não tem retorno");
}
semRetorno(2,3);

//função com retorno
function soma(a, b = 0){
    return a + b;
}
console.log(soma(2,5)); // retorna o resultado da função;