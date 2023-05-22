const moduloA = require('./modulo_A'); 
const moduloB = require('./modulo_B'); 

// exibe o que esta sendo exportado pelo modulo A
console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

// exibe o que esta sendo exportado pelo modulo B
console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());