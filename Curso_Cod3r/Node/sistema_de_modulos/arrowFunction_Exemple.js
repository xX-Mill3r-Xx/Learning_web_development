function Pessoa(){
    this.idade = 0;
    setInterval (()=>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

//iniciar execução Ctrl+Alt+N

//parar execução Ctrl+Alt+M