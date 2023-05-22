const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios');

//Mulher chinesa com menor salario
 
const getPessoaAdequada = pessoa => pessoa.pais === 'China' && pessoa.genero === 'F'
 
 
axios.get(url).then(response => {
 
    const funcionarios = response.data
    const mulheresChinesas = funcionarios.filter(getPessoaAdequada)
    const salarios = mulheresChinesas.map((mulherChinesa) => mulherChinesa.salario)
 
 
    const getMenorSalario = function (arr) {
        let menorSalario = arr[0]
 
        for (let i = 0; i < arr.lenght; i++) {
            if (arr[i] < menorSalario) menorSalario = arr[i]
        }
 
        return menorSalario
    }
 
    console.log(`O menor salário é: ${getMenorSalario(salarios)}`)
 
})