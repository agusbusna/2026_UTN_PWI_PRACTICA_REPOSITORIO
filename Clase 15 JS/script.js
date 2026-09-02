//FUNCIONES 
//sirven para guardar bloques de codigo parametrizables
//Las funciones pueden retornar resultados
//Reglas para return ==> Cuando usamos el retorno, la función corta su ejecución. (por eso solo puede haber un return por function)

//Tipo de iva que puede ser general, reducido o aumentado

/* 

function determinarPorcentajeIva (tipoIva){
    let factor_porcentaje = 0
    if(tipoIva === "general"){    
        factor_porcentaje = 21
    }else if (tipoIva=== "reducido"){ 
        factor_porcentaje = 10.5
    }else if(tipoIva=== "aumentado"){
        factor_porcentaje = 27
    }
    return factor_porcentaje
}

function caclularIva (precio, tipoIva){
    let iva = precio * (determinarPorcentajeIva(tipoIva) /100)
    return iva
}

let iva1000= caclularIva(1000)
console.log("El iva de $1000 es " + iva1000)
let iva2000= caclularIva(2000)
console.log ("Guardamos en DB")

 */

/* 
crear la funcion calcular que recibira 3 parametros
    a: es un numero
    b: es un numero
    operacion: es un string que puede ser '+' o '-'
Si la operacion es + debera retornar el resultado de la suma de a + b
Si la operacion es - debera retornar el resultado de la resta de a - b
NO se solicita el uso de PROMPTS
*//* 

function calcular(a, b, operacion){
    let resultado
    if (operacion === "+"){
        resultado= (a+b)
    }else if(operacion ==="-"){
        resultado= (a-b)
    }else if(operacion === "*"){
        resultado= (a*b)
    }else if (operacion === "/"){
        resultado=(a/b)
    }
    else{
        return null
    }
    return resultado
}

console.log(calcular(50, 50, "+")) //resultado = 100
console.log(calcular(50, 50, "-")) //resultado = 0 
console.log(calcular(50, 50, "*")) //resultado = 2500 
console.log(calcular(50, 50, "/")) //resultado = 1
console.log(calcular(50, 50, "10")) //resultado = null 
 */

//arrays (listas /conexiones / matrices)
//nos permiten almacenar una lista de datos ordenados
//los datos dentro de un array tienen un numero de indice que indicara su posicion dentro de este
/* 

let nombres = [
    'pepe',
    'maria',
    'juan'
]

console.log("el segundo nombre de la lista es " + nombres[2])

//Los arrays guardan  la propiedad .length, esta indica la cantidad de elementos que hay dentro del array
console.log("La cantidad de nombres es " + nombres.length) */
//ejemplo


/* let notas = [10, 5, 10]
let datos= [true, null, 10, "hola"] */
/* 
let tipos_iva_disponibles = [
    "reducido",
    "general",
    "aumentado"
]

let tipo_iva_seleccionado = "general"

if(!tipo_iva_seleccionado.includes(tipos_iva_disponibles)){
    console.log('Error, tipo invalido')
} */

//Los arrays son iterables, o sea podemos recorrerlos con bucles. 
/* 
let nombres = ['pepe','maria','juan']

for(
    let indice= 0;
    indice < nombres.length;
    indice= indice + 1
)
    console.log("Indice " + indice)
    console.log("hola" + nombres[indice])
 */
//Dado una lista de numeros, calcular su sumatoria (osea el resultado de sumar todos los numeros de la lista)
/* let numeros = [500, 400, 100]
let sumatoria= 0
for(
    let indice= 0;
    indice < numeros.length;
    indice= indice +1
){
    sumatoria= sumatoria + numeros[indice]
}

console.log("El resultado final es: "+ sumatoria) */

/* Crear una funcion que se llame obtenerIva(tipoIva) y busque el valor del iva dado cierto tipoIva
Si el tipoIva es invalido devolver null

Como debe funcionar: 
    obtenerIva("general") retorna 21
    obtenerIva("reducido") retorna 10.5
    obtenerIva("pepe") retorna null
*/

let tipos_iva=[
    ["general", 21],
    ["reducido", 10.5],
    ["aumentado", 27]
]

function obtenerIva(tipoIva){
    if(tipoIva==="general"){
        return tipos_iva[0][1]
    }else if(tipoIva==="reducido"){
        return tipos_iva[1][1]
    }else if(tipoIva==="aumentado"){
        return tipos_iva[2][1]
    }else{
        return null
    }
}
console.log(obtenerIva("general"));
console.log(obtenerIva("reducido"));
console.log(obtenerIva("aumentado"))
