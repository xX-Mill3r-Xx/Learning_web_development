/* ----------------------------------------------------------------------------

Exercício: 013
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. O texto deve apresentar uma numeração
    sequencial e depois de inserido, o input deve ser limpo e receber o focus para
    nova inserção.
---------------------------------------------------------------------------- */

/**
 * .btn
 * #text_post
 * #posts
 */

let index = 1;
document.querySelector(".btn").addEventListener("click", () => {
  let input = document.querySelector("#text_post");
  if (input.value !== "") {
    let p = document.createElement("p");
    p.textContent = `${index++}. ${input.value}`;
    document.querySelector("#posts").appendChild(p);
    input.value = "";
    input.focus();
  }
});

/**Explicação do codigo
 * 
 *  let index = 1;
    Cria uma variável chamada "index" e atribui o valor 1 a ela. Essa variável será usada para numerar os parágrafos adicionados.
    
    document.querySelector(".btn").addEventListener('click', () => {
    // Quando o botão for clicado, essa função será executada

    let input = document.querySelector("#text_post");
    // Obtém a referência do elemento de input com o id "text_post" e armazena na variável "input"

    if (input.value !== '') {
        // Verifica se o valor do input não está vazio

        let p = document.createElement('p');
        // Cria um novo elemento <p> usando o método createElement

        p.textContent = `${index++}. ${input.value}`;
        // Define o conteúdo de texto do elemento <p> criado com uma string que inclui o número da indexação e o valor do input

        document.querySelector("#posts").appendChild(p);
        // Localiza o elemento com o id "posts" e adiciona o elemento <p> como filho desse elemento

        input.value = '';
        // Limpa o valor do input definindo-o como uma string vazia

        input.focus();
        // Define o foco no input, para que o cursor permaneça no campo de texto após adicionar o parágrafo
    }
    });

 */
