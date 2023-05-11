/*Em JavaScript, você pode utilizar o operador `typeof` para verificar o tipo de uma variável. O `typeof` retorna uma string que representa o tipo de dado da variável.

Neste exemplo, o `typeof` é usado para verificar o tipo das variáveis `nome`, `idade`, `estaAtivo`, `numeros` e `pessoa`. Os resultados impressos no console são as strings correspondentes aos tipos de dados das variáveis.

É importante notar que o `typeof` retorna "object" para arrays e objetos, pois em JavaScript arrays e objetos são considerados tipos de dados do tipo "object". Para verificar se uma variável é um array, você pode usar o método `Array.isArray()` ou verificar se a variável possui a propriedade `length`.

Além do `typeof`, existem outras técnicas para verificar o tipo de uma variável em JavaScript, como o uso do operador `instanceof` para verificar se um objeto é uma instância de uma determinada classe ou construtor. No entanto, o `typeof` é o método mais comum e simples para essa finalidade.*/

var nome = "João";
var idade = 25;
var estaAtivo = true;
var numeros = [1, 2, 3];
var pessoa = { nome: "Maria", idade: 30 };

console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof estaAtivo); // boolean
console.log(typeof numeros); // object
console.log(typeof pessoa); // object
