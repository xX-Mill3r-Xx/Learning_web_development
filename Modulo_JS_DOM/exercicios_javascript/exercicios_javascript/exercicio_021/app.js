/* ----------------------------------------------------------------------------

Exercício: 021
Enunciado:
    Existem 4 inputs na página.
    1. Coloca o focus automaticamente no input acima e à esquerda.
    2. Sempre que pressionares a tecla Enter (return), o focus deverá
    passar para o input seguinte, mesmo que não tenhas escrito qualquer texto.
---------------------------------------------------------------------------- */

let inputs = document.querySelectorAll('[name^=text_]'); // busca todos os seletores que tenham o nome text_ 
inputs[0].focus(); // cumpre com o primeiro objetivo do enunciado;
inputs.forEach(e => {
    e.addEventListener('keyup', (event) => {
        //se o evento for = a tecla enter
        if(event.code == 'Enter'){
            let index = e.name.substring(5) -1;
            index++;
            if(index == 4) index = 0;
            inputs[index].focus();
        }
    }); // aciciona um evento de Key-UP  a variavel input
});