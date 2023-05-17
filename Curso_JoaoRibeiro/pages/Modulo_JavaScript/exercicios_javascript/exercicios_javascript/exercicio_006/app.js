/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    Existem 3 botões no layout. Cada botão está associado a uma área de
    informação. O objetivo é criar a lógica que permite apresentar cada
    uma das áreas de acordo com o botão clicado.
    A área de informação um deve estar visível por padrão.

    NOTA: quando uma área é apresentada, as outras devem ficar escondidas
---------------------------------------------------------------------------- */

// Obtém os elementos dos botões e das áreas de informação
const btn1 = document.getElementById('tab1');
const btn2 = document.getElementById('tab2');
const btn3 = document.getElementById('tab3');

const info1 = document.getElementById('info1');
const info2 = document.getElementById('info2');
const info3 = document.getElementById('info3');

// Esconde as áreas de informação 2 e 3 inicialmente
info2.style.display = 'none';
info3.style.display = 'none';

// Adiciona os ouvintes de eventos de clique nos botões
btn1.addEventListener('click', function() {
  // Exibe a área de informação 1 e esconde as outras
  info1.style.display = 'block';
  info2.style.display = 'none';
  info3.style.display = 'none';
});

btn2.addEventListener('click', function() {
  // Exibe a área de informação 2 e esconde as outras
  info1.style.display = 'none';
  info2.style.display = 'block';
  info3.style.display = 'none';
});

btn3.addEventListener('click', function() {
  // Exibe a área de informação 3 e esconde as outras
  info1.style.display = 'none';
  info2.style.display = 'none';
  info3.style.display = 'block';
});

//---------------------------------------------------------------
