const entrada = document.getElementById("entradaPar")
const btn = document.getElementById("btnPar")
const salida = document.getElementById("salida")

let numero
entrada.addEventListener("input",(evento)=>{
    console.log(evento.target.value)
    numero = evento.target.value
})

btn.addEventListener("click",()=>{
    if(numero%2==0){
        //estoy creando un elemento
        let hijo = document.createElement("h3")
        hijo.innerHTML = `El numero ${numero} Es Par`
        salida.appendChild(hijo)
    }else{
        let hijo = document.createElement("h3")
        hijo.innerHTML = "El numero " + numero.toString() +"  No es par"
        salida.appendChild(hijo)
    }
})