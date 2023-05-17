//Exemplos de seletores e respectivos resultados

let el = null


//universal selector - *

//Busca o primeiro elemento do documento ----------------------------------------
el = document.querySelector('*')

//busca todos os elementos do documento
el = document.querySelectorAll('*')

//type selector - p /div/ h1 ----------------------------------------------------

//Busca o primeiro paragrafo do documento
el = document.querySelector('p')

//busca todos os paragrafos do documento
el = document.querySelectorAll('p')

// class selector - .texto ------------------------------------------------------

//busca o primeiro elementos que contem a classe "texto" no atributo
el = document.querySelector('.texto')

//busca todos os elementos que contem a classe "texto" no atributo
el = document.querySelectorAll('.texto')

// id selector ------------------------------------------------------------------

//busca o primeiro elemento que contem o id indicado
el = document.querySelector('#texto')

//uma vez que o id é unico, não faz sentido usar o querySelectorAll()

//--------------------------------------------------------------------------------

