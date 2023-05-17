/* ----------------------------------------------------------------------------

Exercício: 017
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
   
    Não pode ser adicionada uma palavra ou frase repetida.
---------------------------------------------------------------------------- */

document.querySelector(".btn").addEventListener('click', () => {
    let input = document.querySelector("#text_post");
    if (input.value !== '') {
        let posts = document.querySelector("#posts");
        let text = input.value.trim();

        // Verifica se o texto já existe nos parágrafos existentes
        let isDuplicate = Array.from(posts.querySelectorAll("p"))
            .some(paragraph => paragraph.textContent.trim() === text);

        if (!isDuplicate) {
            let p = document.createElement('p');
            p.textContent = text;
            posts.appendChild(p);
        }
        
        input.value = '';
        input.focus();
    }
});


/**Explicação do codigo
 * 
        * // Seleciona o botão de adicionar
        const btnAdicionar = document.querySelector(".btn");

        // Adiciona um ouvinte de evento de clique ao botão de adicionar
        btnAdicionar.addEventListener('click', () => {
            // Seleciona o input de texto
            const input = document.querySelector("#text_post");
            
            // Verifica se o input não está vazio
            if (input.value !== '') {
                // Verifica se a palavra ou frase já foi adicionada
                const posts = document.querySelectorAll("#posts p");
                let hasDuplicate = false;
                posts.forEach(post => {
                    if (post.textContent === input.value) {
                        hasDuplicate = true;
                        return;
                    }
                });

                // Se não houver duplicatas, adiciona o parágrafo abaixo do botão
                if (!hasDuplicate) {
                    // Cria um novo elemento de parágrafo
                    const p = document.createElement('p');
                    // Define o texto do parágrafo como o valor do input
                    p.textContent = input.value;
                    // Seleciona o elemento div onde os parágrafos serão adicionados
                    const postsContainer = document.querySelector("#posts");
                    // Adiciona o parágrafo ao container
                    postsContainer.appendChild(p);
                }
            }

            // Limpa o valor do input e dá foco novamente a ele
            input.value = '';
            input.focus();
        });

 */
