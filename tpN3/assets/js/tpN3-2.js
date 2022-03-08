//3a

operacion()

var numero1 = 4
var numero2 = 3
var numero3 = 6

console.log("Suma: "+ (numero1 + numero2))
console.log("Resta: " + (numero1 - numero3))
console.log("Multiplicacion: "+ (numero3 * numero2))
console.log("Division: "+ (numero3 / numero2))





function operacion(){
    var opciones =  prompt("Ingrese un valor: \n 1: para calcular Cuadrado \n 2: para calcular triangulo \n 3: para calcular circulo\n0: para salir")
    if( opciones == 1){
        cuadrado()
    } else if(opciones == 2){
        triangulo()
    } else if(opciones == 3){
        circulo()
    } else if(opciones != 1 || opciones != 2 || opciones != 3 ){
        alert ("Ingrese una opcion correcta ")
        operacion()
 }
}

function cuadrado(){
    var alturaCuadrado = prompt("ingrese la altura del cuadrado :")
    var baseCuadrado = prompt("ingrese la base del cuadrado : ")
   return alert("La superficie del rectangulo es de : " + (alturaCuadrado * baseCuadrado))
}

function  triangulo(){
    var altura = prompt("Ingrese altura del triangulo: ")
    var base = prompt("Ingrese la base de triangulo: ")
    return alert("la superficie del triangulo es: " +  ((altura * base) / 2))
}

function circulo(){
    var radioCirculo = prompt("Ingrese el radio del circulo")
    return alert("la superficie del circulo es: " + (3.1415 * (radioCirculo*radioCirculo)))
}



