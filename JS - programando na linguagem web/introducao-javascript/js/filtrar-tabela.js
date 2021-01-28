let campoFiltro = document.querySelector('#filtrar-tabela')

//escutando evento quando o usuario digita no input
campoFiltro.addEventListener("input", function(){
    let pacientes = document.querySelectorAll(".paciente")  //criando um array de pacientes

    if(this.value.length > 0){  //se o valor que esta no input campoFiltro for maior que 0
        
        for(let i = 0; i < pacientes.length; i++){

            let paciente = pacientes[i]
            let tdNome = paciente.querySelector('.info-nome')
            let nome = tdNome.textContent
            let expressao = new RegExp(this.value, "i")

            if(!expressao.test(nome)){  //se nome for diferente do valor digitado
                paciente.classList.add('invisivel')  // adiciona um classe para deixar os nomes sa tabela invisivel
            } else {
                paciente.classList.remove('invisivel') // se for igual remove a classe invisivel
            }
        }
         
    } else {
        for(let i = 0; i < pacientes.length; i++){  // se nao tiver nenhumm valor digitado entao remove a classe invisvels

            let paciente = pacientes[i]
            paciente.classList.remove('invisivel')
        }
    }

})