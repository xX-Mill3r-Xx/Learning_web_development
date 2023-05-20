//anatomia de uma variavel;

//podemos criar uma variavel usando tanto var ou let, tambem const. as diferenças entre uma e outra serão explicadas futuramente

let nome = "miller";
var sobrenome = "vasco";

console.log(nome, sobrenome);

var idade = 35;

const PI = 3.1415; // uma constante é um tipo de variavel que não poderá ser açterada

//------------------------------------------------------------------------------------

let preco = 19.90;
let desconto = 0.4;

let precoFinal = (preco * (1 - desconto)); // exibe o preço com desconto
console.log(precoFinal);

let nomeProduto = "Caderno"; //variavel do tipo string
let categoria = "Papelaria";

console.log(`Categoria do produto: ${categoria}, nome do produto: ${nomeProduto}`); //usando a interpolação - template string em js