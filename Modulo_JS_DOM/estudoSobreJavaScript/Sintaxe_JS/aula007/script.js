//exemplo 1
let valor = 10
console.log(valor);

//exemplo 2
let valor1 = 10
function escrever(){
    console.log("Função: " + valor1);
}
escrever()
console.log(valor1);

//exemplo 3
let valor2 = 100 //global escope
function escrever2(){
    let valor2 = 100 //local scope
    console.log("Função local: " + valor2);
}
escrever2()
console.log("Função global: "+valor2)

//exemplo 4
/*for(let i =1; i< 10; i++){
    console.log(i);
}*/

//-------------------------------------------------------------
//OBJETOS EM JS
let pessoa = {
    //propiedades
    nome: "miller",
    sobrenome: "vasco",
    idade: 35,
    genero: "mascilino",

    //metodos
    apresentar_nome: function(){
        return this.nome + " " + this.sobrenome
    },

    apresentar_idade: function(){
        return this.idade + " anos"
    },

    hobbies: [
        'programar',
        'jogar video games',
        'estudar'
    ]
}

console.log(pessoa.apresentar_nome());
console.log(pessoa.apresentar_idade());
console.log(pessoa.hobbies);

for(let propiedade in pessoa){
    console.log(pessoa[propiedade]);
}
