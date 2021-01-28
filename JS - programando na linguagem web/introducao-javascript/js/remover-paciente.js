let pacientesArray = document.querySelectorAll(".paciente")  //selecionando todas as tr's criando um array

let tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function(event){
    
    //let alvoEvento = event.target    // TD
    //let paiDoAlvo = alvoEvento.parentNode   //TR ou seja, toda linha que queremos remover ao inves de uma celula
    //paiDoAlvo.remove()

    event.target.parentNode.classList.add("fadeOut") //criando uma classe para estilizar no css

    setTimeout(function(){ // usando setTimeOut para estipular o tempo da animacao de remove

        event.target.parentNode.remove()
    }, 500)
    

})