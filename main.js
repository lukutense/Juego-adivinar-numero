let comenzar= document.querySelector('.comenzar')
let game= document.querySelector('.game')
let submit=document.querySelector('#submit')
let adivina=document.querySelector('#adivina')
let numerosPrevios= document.querySelector('#numerosPrevios')
let respuesta=document.querySelector('#respuesta')

let numeroAleatorio= Math.round(Math.random() * (1 - 100) +100)
let numerosIngresados=[]


comenzar.addEventListener('click',function(){
    game.classList.toggle('game')    
})

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    numerosIngresados.push(adivina.value)
    numerosPrevios.textContent=numerosIngresados
    
    if(numerosIngresados.length<=10){
        if(adivina.value<numeroAleatorio){
            respuesta.textContent=('el numero ganador es mayor, tenes x posiblidades mas')
        } else if (adivina.value>numeroAleatorio){
            respuesta.textContent=('el numero ganador es menor, tenes x posibilidades mas')
        } else if(adivina.value==numeroAleatorio){
            respuesta.textContent=(`Ganaste, el numero ganador era ${numeroAleatorio}. Adivinaste, felicitaciones.`)
        }
    }  else {
        respuesta.textContent=(`Perdiste, el numero ganador era ${numeroAleatorio}. Mejor suerte la próxima vez.`)  
    }
})
