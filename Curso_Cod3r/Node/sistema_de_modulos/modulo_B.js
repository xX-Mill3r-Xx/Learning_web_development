module.exports = {
    bomDia: 'Bom Dia',
    boaNoite(){
        return 'Boa Noite'
    }
}

/*O código que você apresentou exporta um objeto em um módulo do Node.js usando o `module.exports`. Este objeto possui duas propriedades:

1. `bomDia`: É uma propriedade que armazena a string `'Bom Dia'`.
2. `boaNoite`: É uma propriedade que armazena uma função anônima. Quando essa função é chamada, ela retorna a string `'Boa Noite'`.

A principal finalidade desse código é exportar essas duas propriedades para que possam ser usadas em outros módulos do Node.js. Quando outro módulo requer esse módulo específico, ele pode acessar e utilizar as propriedades `bomDia` e `boaNoite`. Por exemplo:

const saudacoes = require('./arquivo.js');

console.log(saudacoes.bomDia); // Output: Bom Dia
console.log(saudacoes.boaNoite()); // Output: Boa Noite

Dessa forma, o objeto `saudacoes` terá acesso às propriedades definidas no módulo exportado, permitindo que você imprima a mensagem de "Bom Dia" e "Boa Noite" no console.*/