/* ----------------------------------------------------------------------------

Exercício: 012
Enunciado:
    Ao clicar no botão "Adicionar", se o input de texto não estiver vazio, adicionar
    um parágrafo com esse texto por baixo do botão.
---------------------------------------------------------------------------- */

document.querySelector(".btn").addEventListener('click', () => {
    let texto = document.querySelector("#text_post").value;
    if (texto !== '') {
        let p = document.createElement('p');
        p.textContent = texto;
        document.querySelector("#posts").appendChild(p);
    }
});

/**Explicação do codigo
 * 
 * document.querySelector(".btn").addEventListener('click', () => {
    // Quando o botão for clicado, essa função será executada

    let texto = document.querySelector("#text_post").value;
    // Obtém o valor do campo de texto com o id "text_post" e armazena na variável "texto"

    if (texto !== '') {
        // Verifica se o texto não está vazio

        let p = document.createElement('p');
        // Cria um novo elemento <p> usando o método createElement

        p.textContent = texto;
        // Define o conteúdo de texto do elemento <p> criado para o valor do texto obtido

        document.querySelector("#posts").appendChild(p);
        // Localiza o elemento com o id "posts" e adiciona o elemento <p> como filho desse elemento
    }
});
 */
