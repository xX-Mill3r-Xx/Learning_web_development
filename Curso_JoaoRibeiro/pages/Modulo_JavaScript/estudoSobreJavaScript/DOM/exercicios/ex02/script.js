let section = document.querySelector("section")
let article = document.querySelector("article")
let div = document.querySelector("div")

section.addEventListener('click', (event) =>{
    event.stopPropagation()
    console.log('section');
})

article.addEventListener('click', (event) =>{
    event.stopPropagation()
    console.log('article');
})

div.addEventListener('click', (event) =>{
    event.stopPropagation()
    console.log('div');
})