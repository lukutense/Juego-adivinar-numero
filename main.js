let comenzar= document.querySelector('.comenzar')
let game= document.querySelector('.game')
let submit=document.querySelector('#submit')
let adivina=document.querySelector('#adivina')
let numerosPrevios= document.querySelector('#numerosPrevios')
let respuesta=document.querySelector('#respuesta')
let numeroAleatorio= Math.round(Math.random() * (1 - 100) +100)
let numerosIngresados=[]
let numeroComparado= 0

comenzar.addEventListener('click',function(){
    game.classList.toggle('game')    
})

submit.addEventListener("click",function(event){
    event.preventDefault()
    numerosIngresados.push(adivina.value)
    numerosPrevios.textContent=numerosIngresados
    
    if(numerosIngresados.length === 10){
        comparacion()

        if(numeroComparado==numeroAleatorio){
            respuesta.textContent=(`Ganaste, el numero ganador era ${numeroAleatorio}. Adivinaste, felicitaciones.`)
        }else {
            respuesta.textContent=(`Perdiste, el numero ganador era ${numeroAleatorio}. Mejor suerte la próxima vez.`)
        }
    }
})


let comparacion=()=>{
    numeroComparado=numerosIngresados.find(numero=>numero==numeroAleatorio)
    return numeroComparado
}
