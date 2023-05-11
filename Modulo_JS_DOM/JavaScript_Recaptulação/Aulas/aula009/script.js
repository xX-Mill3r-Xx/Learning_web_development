/* 
    Em JavaScript, uma string é um tipo de dado que representa uma sequência de caracteres. As strings são usadas para armazenar e manipular texto na linguagem.

    Uma string pode ser definida entre aspas simples (''), aspas duplas ("") ou acento grave/backtick ( ). Veja abaixo um exemplo de uso de strings em JavaScript:
*/

// Definindo strings
let nome = "João";
let mensagem = 'Olá, seja bem-vindo!';
let frase = `Meu nome é ${nome}.`;

// Concatenação de strings
let saudacao = "Olá";
let nomeCompleto = "Maria Silva";
let mensagemCompleta = saudacao + " " + nomeCompleto;

// Acessando caracteres de uma string
let palavra = "JavaScript";
let primeiroCaractere = palavra[0]; // 'J'
let segundoCaractere = palavra[1]; // 'a'

// Tamanho de uma string
let texto = "Hello, world!";
let tamanho = texto.length; // 13

// Métodos de string
let textoMaiusculo = texto.toUpperCase(); // "HELLO, WORLD!"
let textoMinusculo = texto.toLowerCase(); // "hello, world!"
let parteDaString = texto.slice(0, 5); // "Hello"
let substituirTexto = texto.replace("world", "JavaScript"); // "Hello, JavaScript!"

// Verificando se uma string contém outra string
frase = "Eu amo JavaScript!";
let contemAmo = frase.includes("amo"); // true
let contemPython = frase.includes("Python"); // false

/**As strings em JavaScript possuem diversos métodos embutidos que permitem manipulá-las e realizar operações comuns, como converter letras para maiúsculas ou minúsculas, substituir partes da string, dividir em substrings, entre outros. É possível também acessar caracteres individuais de uma string usando a notação de colchetes ([ ]). */
