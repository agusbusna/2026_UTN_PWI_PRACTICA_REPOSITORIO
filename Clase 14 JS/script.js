//ejecuta un "hola mundo" x 5 veces


/* for(
    let iterador = 1;
    iterador <= 5; //limite, mientras esto sea verdadero, el bloque de codigo se ejecuta
    iterador = iterador +1
)
{
    console.log("el iterador vale: " + iterador)
    console.log("hola mundo")
}
 */
/* for(
    let iterador = 10;
    iterador >= 1; //limite, mientras esto sea verdadero, el bloque de codigo se ejecuta
    iterador = iterador - 1
)
{
    console.log("el iterador vale: " + iterador)
    console.log("hola mundo")
} */

/* 
SACAR un PROMEDIO de 3 notas 
Solicitar 3 notas (1 de cada trimestre)
Calcular el promedio
*/
//FOR: accion: pedir una nota y sumarla al resto, veces 3. 

/* let sumatoria_notas = 0
for(
    let iterador= 1; //EL UNICO LUGAR donde es NECSARIO poner un ; (punto y coma)
    iterador <=3;
    iterador = iterador +1
){
    let nota= prompt ("ingresa la nota del (" + iterador + ")") //VER como funciona bien esto, no lo entendi.
    nota = Number (nota)
    sumatoria_notas = sumatoria_notas + nota
}

    let promedio = sumatoria_notas /3
    alert("El promedio anual es" + promedio) */



//PAN Y QUESO
/* 
El usuario debe elegir si será "pan" o "queso", 
se calculará un numero aleatorio entre 1 y 20,
vamos a alternar entre pan y queso hasta llegar al numero aleatorio (Pueden determinar quien inicia con otro num-aleatorio)
el valor final determinara si el usuario gano (si el valor final es igual al valor seleccionador)
*/


let seleccionado = prompt("Elija 'pan' o 'queso'")

let numero_random = Math.floor((Math.random() * 20) + 1)
console.log("Numero de rondas= " + numero_random)
let palabra
if (Math.random() > 0.5) {
    palabra = 'pan'
}
else {
    palabra = 'queso'
}

for(
    let i= 1;
    i <= numero_random;
    i = i +1
){
    if (palabra=== "pan"){
        palabra= "queso";
    } else{
        palabra= "pan"
    }
    console.log(palabra)
}
console.log("Resultado final: " + palabra)
if (palabra ===seleccionado){
    console.log("Ganaste")
} else{
    console.log("Perdiste")
} 

//Declaracion de funcion
//Cuando declaramos: estamos diciendo esta funcion existe con este nombre y hace esto,  es un manual de lo que hara.
/* function saludar(){
    console.log("Hola mundo")
}

//Invocacacion/llamada de la funcion /Ejecutar la funcion
saludar()
saludar()


//a y b son los parametros de la funcion sumar
//Un parametro es un valor que se le transmitira a una funcion cuando es invocada
function sumar(a, b){
    console.log("El resultado de " a "+ "+ b + " es " + (a + b))
}
 */
/* Crear una función  llamada calcularIva que recibira un numero y mostrara por consola "el iva de ${numero} es ${iva}" */

/* function calcularIva(precio){
    let iva= precio * 0.21;
    console.log("El iva de $ " + precio + " es  $" + iva)
}   


calcularIva(300)
calcularIva(5210)
 */

/* 
function saludar (nombre) {
    console.log ("Hola " + nombre + "!")
}

saludar("Agus") */