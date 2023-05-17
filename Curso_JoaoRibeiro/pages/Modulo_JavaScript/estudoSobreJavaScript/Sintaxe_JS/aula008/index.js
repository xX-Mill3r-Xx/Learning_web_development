//Objetos
let transporte = {
    tipo: "automovel",
    ano: 2003,
    marca: "audi"
}

let tranporte_final = Object.assign({}, transporte)
tranporte_final.marca = "nissan"
console.table(transporte);
console.table(tranporte_final);