//Objetivo.: Apresentar 25 caixas em stak vertical com gradação de cores, verde ou azul ou vermelho com variação do valor RGB em 10 pontos

document.querySelector("#btn_vermelho").addEventListener('click', () =>{
    delete_elements()
    for(let i = 0; i <= 250; i+=10){
        let tmp = document.createElement('div')
        tmp.classList.add('caixa')
        tmp.style.backgroundColor = `rgb(${i}, 0, 0)`
        document.body.appendChild(tmp)
    }
})

document.querySelector("#btn_verde").addEventListener('click', () =>{
    delete_elements()
    for(let i = 0; i <= 250; i+=10){
        let tmp = document.createElement('div')
        tmp.classList.add('caixa')
        tmp.style.backgroundColor = `rgb(0, ${i}, 0)`
        document.body.appendChild(tmp)
    }
})

document.querySelector("#btn_azul").addEventListener('click', () =>{
    delete_elements()
    for(let i = 0; i <= 250; i+=10){
        let tmp = document.createElement('div')
        tmp.classList.add('caixa')
        tmp.style.backgroundColor = `rgb(0, 0, ${i})`
        document.body.appendChild(tmp)
    }
})

function delete_elements(){
    let elementos = document.querySelectorAll('.caixa')
    elementos.forEach(e => e.remove())
}