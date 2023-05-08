//Arrays
let nomes = ["joão", "ana", "carlos"]
//console.table(nome)
console.log(nomes.includes("carlos"));

let todos_os_nomes = nomes.join("|")
console.log(todos_os_nomes);

//nomes.sort();
//nomes .reverse
console.table(nomes.sort().reverse())

let valores = [1,30,20,50,56,45]
valores.sort()
console.table(valores);
valores.reverse()
console.table(valores)