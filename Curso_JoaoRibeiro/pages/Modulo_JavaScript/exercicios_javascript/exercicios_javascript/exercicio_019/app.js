/* ----------------------------------------------------------------------------

Exercício: 019
Enunciado:
    Está declarado um array de frutos.
    Ao inserir uma palavra no input text e clicando em pesquisar, o sistema deverá
    indicar se a palavra existe ou não no array e indicar o resultado SIM ou NAO no
    elemento com o id = "resultado"

    NOTA: Não podes usar um ciclo neste exercício.
---------------------------------------------------------------------------- */
// let frutos = ['laranja', 'maçã', 'pêra', 'morango', 'ananás', 'limão', 'banana'];

// Array de frutos
let frutos = ['laranja', 'maçã', 'pêra', 'morango', 'ananás', 'limão', 'banana'];

// Seleciona o botão de pesquisar
const btnPesquisar = document.querySelector(".btn");

// Adiciona um ouvinte de evento de clique ao botão de pesquisar
btnPesquisar.addEventListener('click', () => {
    // Seleciona o input de texto
    const input = document.querySelector("#text_palavra");
    
    // Obtém o valor do input em letras minúsculas
    const palavra = input.value.toLowerCase();
    
    // Verifica se a palavra existe no array de frutos
    const resultado = frutos.includes(palavra) ? "SIM" : "NÃO";
    
    // Seleciona o elemento de resultado
    const resultadoElement = document.querySelector("#resultado");
    
    // Define o texto do elemento de resultado com o resultado da pesquisa
    resultadoElement.textContent = resultado;
    
    // Limpa o valor do input
    input.value = '';
});
