/* ----------------------------------------------------------------------------

Exercício: 014
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão. 
    Depois da inserção com sucesso, o input deve ser limpo e receber o focus para
    nova inserção.
    Não são permitidas as palavras "teste", "obrigado" e "hoje"
---------------------------------------------------------------------------- */

/**
 * .btn
 * #text_post
 * #posts
 */

let nok = ["teste", "obrigado", "hoje"];
document.querySelector(".btn").addEventListener('click', () => {
    let input = document.querySelector("#text_post");
    if(input.value !== ''){
        if(!nok.includes(input.value)){
            let p = document.createElement('p');
            p.textContent = input.value;
            document.querySelector("#posts").appendChild(p);
            input.value = '';
            input.focus();
        }
    }
});

/**Explicação do codigo
 * 
 *  let nok = ["teste", "obrigado", "hoje"];
    Cria uma variável "nok" que armazena um array com algumas palavras-chave proibidas.

    document.querySelector(".btn").addEventListener('click', () => {
    // Quando o botão for clicado, essa função será executada.

    let input = document.querySelector("#text_post");
    // Obtém a referência do elemento de input com o id "text_post" e armazena na variável "input".

    if (input.value !== '') {
        // Verifica se o valor do input não está vazio.

        if (!nok.includes(input.value)) {
            // Verifica se o valor do input não está presente no array "nok", ou seja, não é uma palavra proibida.

            let p = document.createElement('p');
            // Cria um novo elemento <p> usando o método createElement.

            p.textContent = input.value;
            // Define o conteúdo de texto do elemento <p> como o valor do input.

            document.querySelector("#posts").appendChild(p);
            // Localiza o elemento com o id "posts" e adiciona o elemento <p> como filho desse elemento.

            input.value = '';
            // Limpa o valor do input definindo-o como uma string vazia.

            input.focus();
            // Define o foco no input, para que o cursor permaneça no campo de texto após adicionar o parágrafo.
        }
    }
    });

 */