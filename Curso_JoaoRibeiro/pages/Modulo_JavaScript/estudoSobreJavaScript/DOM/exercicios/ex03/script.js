let elementos = document.querySelectorAll("section, article, div")

elementos.forEach((event) => {
    event.addEventListener('click', (e) => {
        e.stopPropagation()
        console.log(e.target.tagName);
    })
})