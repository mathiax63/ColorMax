
window.addEventListener("load", function () {
    //console.log("entre")
 let colores = []
 colores[0] =""
 colores[1] =  "#000066"
 colores[2] =  "#ff402045"
 colores[3] =  "#ff504046"
 colores[4] =  "#ff801056"
 colores[5] =  "#99FF99"
 colores[6] =  "#000000"
 colores[7] =  "#CC3300"
 colores[8] =  "#FF6666"
 colores[9] = "#FFF56199"

 let coloresNombres = []
 coloresNombres[0] =""
 coloresNombres[1] =  "#000066"
 coloresNombres[2] =  "#ff402045"
 coloresNombres[3] =  "#ff504046"
 coloresNombres[4] =  "#ff801056"
 coloresNombres[5] =  "#99FF99"
 coloresNombres[6] =  "#000000"
 coloresNombres[7] =  "#CC3300"
 coloresNombres[8] =  "#FF6666"
 coloresNombres[9] = "#FFF56199"

 let coloresDelDiv = document.getElementById("divDeColores")

 coloresDelDiv.style.backgroundColor = colores[0]

 let contador = 0
 function corredorDeColores(){
     //console.log("pase?")
     
  if(contador>=8){
    contador=0
  }
     contador++
     coloresDelDiv.style.backgroundColor = colores[contador]
     coloresDelDiv.style.backgroundColor = colores[contador]
 }

setInterval(corredorDeColores, 2000)

//console.log("sali")



let pColor = document.getElementById("pDivDeColores")


pColor.style.color = colores[0]

 let contadorp = 0
 function cambioDeP(){
    if(contadorp>=8){
        contadorp=0
      }
     contadorp++
     pColor.style.color = colores[contadorp]
     pColor.style.color = colores[contadorp]
 }
 setInterval(cambioDeP, 2000)



pColor.innerHTML= coloresNombres[0]

 let contadorpn = 0
 function cambioDeDatosP(){
    if(contadorpn>=8){
        contadorpn=0
      }
     contadorpn++
     pColor.innerHTML = coloresNombres[contadorpn]
     pColor.innerHTML = coloresNombres[contadorpn]   
 }
 setInterval(cambioDeDatosP, 2000)

 //let colorAleatoreo = document.getElementById("divDeAleatoreo")
 

 function numeroAlAzar(numero){
   const caracteresDeLosColores = "FDEBAC1234567890"
   let resultado = ""
   const caracteresDeLosColoresContados = caracteresDeLosColores.length; 
   let asterisco = "#"
   for (let i = 0; i < numero; i++){
     resultado += caracteresDeLosColores.charAt(Math.floor(Math.random() * caracteresDeLosColoresContados))
     //console.log("cuanto estoy aka?")
     //console.log(resultado)
    
   } 

   let sumaDeAmbos =asterisco+resultado
   
   return sumaDeAmbos
   //console.log(sumaDeAmbos)

 }
 function resultadoDeAzar (){
  
 let colorAleatoreo = document.getElementById("divDeAleatoreo")
 let sumaConLasP = document.getElementById("pSumaDeAmbos")
 colorAleatoreo.style.backgroundColor = numeroAlAzar(8);
 sumaConLasP.innerHTML = "El color rgb que esta viendo es: " + numeroAlAzar(8)
     
}
    

setInterval(resultadoDeAzar, 3000)


console.log(numeroAlAzar(8));




})