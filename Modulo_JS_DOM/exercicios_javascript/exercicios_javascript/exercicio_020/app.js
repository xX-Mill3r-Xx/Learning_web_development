/* ----------------------------------------------------------------------------

Exercício: 020
Enunciado:
    Existem 4 inputs na página.
    Sempre que o focus de um input for alterado, a cor de fundo do input
    deve ficar amarela, indicando que o input está ativo. 
    Os inativos devem ficar a branco.
---------------------------------------------------------------------------- */

// Seleciona todos os inputs
const inputs = document.querySelectorAll('input');

// Adiciona um ouvinte de evento de foco a cada input
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        // Altera a cor de fundo para amarelo ao obter o foco
        input.style.backgroundColor = 'yellow';
    });
    
    input.addEventListener('blur', () => {
        // Remove a cor de fundo ao perder o foco
        input.style.backgroundColor = '';
    });
});


