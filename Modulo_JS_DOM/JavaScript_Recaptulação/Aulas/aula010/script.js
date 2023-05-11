/**
 * Em JavaScript, as estruturas condicionais permitem que você tome decisões com base em condições específicas. Existem três estruturas condicionais principais: `if`, `else if` e `else`.

A estrutura `if` permite executar um bloco de código se uma condição for verdadeira. Se a condição for falsa, o bloco de código dentro do `if` não será executado. Aqui está um exemplo:

```javascript
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}
```

Nesse exemplo, o código dentro do bloco `if` será executado porque a condição `idade >= 18` é verdadeira.

A estrutura `else if` é usada para verificar várias condições em sequência. Se a primeira condição `if` for falsa, a próxima condição `else if` será verificada. Aqui está um exemplo:

```javascript
let nota = 85;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("D");
}
```

Nesse exemplo, o código verifica a nota e imprime uma mensagem correspondente à faixa de notas. Se a nota for 85, a mensagem "B" será impressa.

A estrutura `else` é usada como uma opção final para executar um bloco de código se todas as condições anteriores forem falsas. Aqui está um exemplo:

```javascript
let hora = 14;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
```

Nesse exemplo, a mensagem "Boa tarde!" será impressa se a variável `hora` for maior ou igual a 12 e menor que 18. Caso contrário, a mensagem "Boa noite!" será impressa.

Essas são apenas algumas das possibilidades de uso das estruturas condicionais em JavaScript. Elas permitem que você controle o fluxo do seu programa com base em condições específicas, permitindo a execução de diferentes blocos de código dependendo do resultado da avaliação das condições.
 */

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}


let nota = 85;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("D");
}


let hora = 14;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
