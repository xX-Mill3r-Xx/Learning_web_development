/* ----------------------------------------------------------------------------

Exercício: 018
Enunciado:
    Ao clicar em "Adicionar", se o input tiver texto, adicionar o mesmo num
    parágrafo por baixo do botão. 
   
    Cada texto inserido deve ser precedido da expressão "Eliminar" com cor vermelha
    e como efeito de um mouse hover.

    Se clicar em "Eliminar" apenas poderá ser removida a palavra ou frase
    correspondente.
---------------------------------------------------------------------------- */

// Seleciona o botão de adicionar
const btnAdicionar = document.querySelector(".btn");

// Adiciona um ouvinte de evento de clique ao botão de adicionar
btnAdicionar.addEventListener('click', () => {
    // Seleciona o input de texto
    const input = document.querySelector("#text_post");
    
    // Verifica se o input não está vazio
    if (input.value !== '') {
        // Cria um novo elemento de parágrafo
        const p = document.createElement('p');
        
        // Cria um novo elemento de span para a expressão "Eliminar"
        const spanEliminar = document.createElement('span');
        spanEliminar.textContent = "Eliminar ";
        spanEliminar.style.color = "red";
        
        // Define o texto do parágrafo como a expressão "Eliminar" seguida do valor do input
        p.appendChild(spanEliminar);
        p.appendChild(document.createTextNode(input.value));
        
        // Adiciona a classe "hover-effect" ao parágrafo
        p.classList.add("hover-effect");
        
        // Adiciona o parágrafo abaixo do botão
        const postsContainer = document.querySelector("#posts");
        postsContainer.appendChild(p);
        
        // Adiciona um ouvinte de evento de clique ao parágrafo
        p.addEventListener('click', () => {
            // Remove o parágrafo do container
            postsContainer.removeChild(p);
        });
    }

    // Limpa o valor do input e dá foco novamente a ele
    input.value = '';
    input.focus();
});

