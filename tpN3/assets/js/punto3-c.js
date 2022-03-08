


// productos
var shampoo = ["shampoo" , 5]
var cepillo = ["cepillo de dientes" , 10]
var cremaEnjuague = ["Crema de Enjuague" , 6]
var pastaDental = ["Pasta dental" , 6]
var pañales = ["Pañales" , 15]


calcularCompra()

function calcularCompra(){
   
   var compra = prompt("Ingrese la compra que desea hacer:\n1: " + shampoo[0]+"\n" + "2: " + cepillo[0]+"\n" + "3: "+cremaEnjuague[0]+"\n" +  "4: " + pastaDental[0] + "\n" + "5: "+pañales[0] + "\n0: para salir")
        if (compra == 1){
            totalShampoo = calcularItem(shampoo[1])
        }else if (compra == 2){
            totalCepillo = calcularItem(cepillo[1])
        }else if(compra == 3){
            totalCremaEnjuague = calcularItem(cremaEnjuague[1])
        }else if (compra == 4){
            totalPastaDental = calcularItem(pastaDental[1])
        }else if (compra == 5){
            totalPañales = calcularItem(pañales[1])
        }else if(compra != 1 || compra != 2 || compra != 3 || compra != 4 || compra != 5){
            alert("Ingrese una opcion valida") 
    }


}


function calcularItem(precio){
    var cantidad = prompt("cuanto necesita?\n")
    var total = precio * cantidad
    alert("el total del shampoo es: "+ total)
    return total
}