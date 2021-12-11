
window.addEventListener("load", function () {
    //console.log("entre")
 let colores = []

 colores[0] =  "#ff708215"
 colores[1] =  "#ff402045"
 colores[2] =  "#ff504046"
 colores[3] =  "#ff801056"
 colores[4] =  "#ff048075"
 colores[5] =  "#ff962078"
 colores[6] =  "#ff804507"
 colores[7] =  "#ff301406"
 colores[8] = "FFFF0099"

 let coloresNombres = []

 coloresNombres[0] =  " El color RGB que esta viendo es #ff708215"
 coloresNombres[1] =  "El color RGB que esta viendo es #ff402045"
 coloresNombres[2] =  "El color RGB que esta viendo es #ff504046"
 coloresNombres[3] =  "El color RGB que esta viendo es #ff801056"
 coloresNombres[4] =  "El color RGB que esta viendo es #ff048075"
 coloresNombres[5] =  "El color RGB que esta viendo es #ff962078"
 coloresNombres[6] =  "El color RGB que esta viendo es #ff804507"
 coloresNombres[7] =  "El color RGB que esta viendo es #ff301406"
 coloresNombres[8] = "El color RGB que esta viendo es FFFF0099"

 let coloresDelDiv = document.getElementById("divDeColores")

 coloresDelDiv.style.backgroundColor = colores[0]

 let contador = 0
 function corredorDeColores(){
     //console.log("pase?")
     
  if(contador>8){
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
    if(contadorp>8){
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
    if(contadorpn>8){
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
   console.log(sumaDeAmbos)

 }
 function resultadoDeAzar (){
  
 let colorAleatoreo = document.getElementById("divDeAleatoreo")
 colorAleatoreo.style.backgroundColor = numeroAlAzar(8);
     
}
    

setInterval(resultadoDeAzar, 1000)


console.log(numeroAlAzar(8));




})