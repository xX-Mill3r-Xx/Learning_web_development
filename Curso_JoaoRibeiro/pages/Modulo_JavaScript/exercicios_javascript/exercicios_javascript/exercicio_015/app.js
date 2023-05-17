/* ----------------------------------------------------------------------------

Exercício: 015
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão.

    As palavras e frases mais recentes devem ficar no topo.
---------------------------------------------------------------------------- */

document.querySelector(".btn").addEventListener('click', () => {
    let input = document.querySelector("#text_post");
    if (input.value !== '') {
        let p = document.createElement('p');
        p.textContent = input.value;

        let postsContainer = document.querySelector("#posts");
        postsContainer.insertBefore(p, postsContainer.firstChild);

        input.value = '';
        input.focus();
    }
});

/**Explicação do codigo
 * 
 *  // Seleciona o botão com a classe ".btn" e adiciona um ouvinte de evento para o clique
    document.querySelector(".btn").addEventListener('click', () => {
    // Obtém o elemento de input com o ID "#text_post"
    let input = document.querySelector("#text_post");

    // Verifica se o valor do input não está vazio
    if (input.value !== '') {
        // Cria um novo elemento de parágrafo
        let p = document.createElement('p');

        // Define o texto do parágrafo como o valor do input
        p.textContent = input.value;

        // Obtém o contêiner onde os parágrafos serão adicionados
        let postsContainer = document.querySelector("#posts");

        // Insere o novo parágrafo no início do contêiner, mantendo a ordem inversa
        postsContainer.insertBefore(p, postsContainer.firstChild);

        // Limpa o valor do input
        input.value = '';

        // Define o foco de volta para o input
        input.focus();
    }
    });

 */
