/**
 * exibir no console os numeros de 1 a 10
 *
 * no bloco 1 - somente os numeros 1 3 5 7 9
 * no bloco 2 - somente os numeros 2 4 5 8 10
 */

console.log("bloco 1");
for (let i = 0; i < 9; i++) {
  console.log((i += 1));
}

console.log("bloco 2");
for (let i = 1; i < 10; i++) {
  console.log((i += 1));
}

/**
 * Optei por resolver o desafio de uma forma mais complexa, usando o loop for.
 */

console.log("maneira pedida no enunciado");
console.log("bloco 1");
{
  console.log(1);
  console.log(3);
  console.log(5);
  console.log(7);
  console.log(9);
}

console.log("bloco 2");
{
  console.log(2);
  console.log(4);
  console.log(6);
  console.log(8);
  console.log(10);
}
