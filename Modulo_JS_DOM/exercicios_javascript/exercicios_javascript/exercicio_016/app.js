/* ----------------------------------------------------------------------------

Exercício: 016
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
    Não importa a ordem das palavras e frases.
    Quando clicar em "Limpar", todas as palavras e frases devem desaparecer
    e o input deve ficar limpo e receber o focus.

    NOTA: O HTML não pode ser alterado.
---------------------------------------------------------------------------- */
let input = document.querySelector("#text_post");

// Adicionar
document
  .querySelector(".mt-3.text-center")
  .lastElementChild.addEventListener("click", () => {
    if (input.value !== "") {
      let p = document.createElement("p");
      p.textContent = input.value;
      document.querySelector("#posts").appendChild(p);
      input.value = "";
      input.focus();
    }
  });

/**Explicação do codigo adicionar
 * 
     * // Seleciona o elemento HTML com o ID "text_post" e armazena na variável 'input'
    let input = document.querySelector("#text_post");

    // Adiciona um ouvinte de evento de clique ao último elemento filho do elemento com as classes "mt-3" e "text-center"
    document.querySelector(".mt-3.text-center").lastElementChild.addEventListener('click', () => {
        // Verifica se o valor do input não está vazio
        if (input.value !== '') {
            // Cria um novo elemento de parágrafo
            let p = document.createElement('p');
            // Define o texto do parágrafo como o valor do input
            p.textContent = input.value;
            // Adiciona o parágrafo ao elemento com o ID "posts"
            document.querySelector("#posts").appendChild(p);
            // Limpa o valor do input
            input.value = '';
            // Foca novamente no input
            input.focus();
        }
    });

 */

// Limpar
document
  .querySelector(".mt-3.text-center")
  .firstElementChild.addEventListener("click", () => {
    document.querySelector("#posts").innerHTML = null;
    input.value = "";
    input.focus();
  });

  /**Explicação do codigo Limpar 
   * 
        * // Seleciona o primeiro elemento que possui as classes "mt-3" e "text-center"
        document.querySelector(".mt-3.text-center")
        // Seleciona o primeiro elemento filho desse elemento
        .firstElementChild
        // Adiciona um ouvinte de evento de clique a esse elemento
        .addEventListener("click", () => {
            // Seleciona o elemento com o ID "posts" e define seu conteúdo HTML como nulo, removendo todos os elementos filhos
            document.querySelector("#posts").innerHTML = null;
            // Define o valor do input como uma string vazia
            input.value = "";
            // Foca novamente no input
            input.focus();
        });

  */
