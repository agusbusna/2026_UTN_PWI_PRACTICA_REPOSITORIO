/* CONDICIONEs
Estructuras que nos van a permitir controlar el flujo de nuestro còdigo


IF: el if permite controlar si un bloque de codigo se ejecuta o no. Bajo una cierta condición. 
ELSE: Va siempre seguido de un IF y se ejecuta cuando a la condiciòn de este NO sea verdadera
ELSE IF: Va siempre seguido de un IF o ELSE IF y te permite agregar una condición cuando la condición de este NO es verdadera (Falla)
*/

/* let password = prompt('ingrese su contraseña')

let contraseniaCorrecta = password === 'pepe_123'
if(contraseniaCorrecta){
    console.log("bienvenido");   
}

else{
    console.log("credenciales inválidas")
}


let numero_dia = 2

if(numero_dia === 0)
{
    console.log("Hoy es lunes")
}
else if(numero_dia === 1)
{
    console.log("Hoy es martes")
}
else if(numero_dia === 2)
{
    console.log("Hoy es miercoles")
}
else if(numero_dia === 3)
{
    console.log("Hoy es jueves")
}
else if(numero_dia === 4)
{
    console.log("Hoy es viernes")
}
else if(numero_dia === 5)
{
    console.log("Hoy es sabado")
}
else(numero_dia === 6)
{
    console.log("Hoy es domingo")
}
 */

/* Solicitar al usuario su edad (Imaginemos para fines prácticos que el dato siempre es válido (un número positivo)) 
Si la edad del usuario es menor a 16, entonces indicar por consola "Es menor de edad"
Si la edad del usuario es entre 16 y 18 entonces indiciar por consola "Casi deja de ser menor de edad"
Si la edad del usuario es mayor a 18 entonces indicar por consola "Es mayor de edad"

Para saber si un número está en cirto rango podemos usar el "AND" &&
*/
/* let edadDeUsuario = prompt ("Ingrese su edad")

if(edadDeUsuario <16)
{
    console.log( "Es menor de edad")
}

else if(edadDeUsuario =16 && edadDeUsuario <18)
{
    console.log("Casi deja de ser menor de edad")
}
else 
{
    console.log("Es mayor de edad")
}
 */
/* Solicitar  al usuario un número A (Asumismo que el usuario escribirá correctamente un número)
Solicitar al usario un número B (Asumismo que el usuario escribirá correctamente un número)

Solicitar  al usuario una operación: 
si la operación es "+" o "sumar" entonces deberemos por consola mostrar el resultado de la suma de A + B es C
Si la operación es "-" o "restar" entonces deberemos por consola mostrar el resultado de la resta A - B es C
Si la operación no es ninguno de los anteriores deberemos decir por consola "Operación Inválida, vuelva a intentar"
*/
/* 
let numero_A = Number(prompt("ingrese un número"))
let numero_B = Number(prompt("ingrese otro número"))
let operacion = prompt("Ingrese una operación, puede ser 'sumar' (+) o 'restar' (-)")
if(operacion === "sumar" || operacion ==="+")
{
    console.log(numero_A + numero_B)
}
else if (operacion === "restar" || operacion ==='-')
{
    console.log(numero_A - numero_B)
}
else {
    console.log("Operación Inválida, vuelva a intentar")
}
 */

//SWITCH
/* Nos sirve para condicionar y lo vamos a utilizar principalmente en condiciones multiples de estricta igualdad*/

/* 
ACCIONES POSIBLES
"SALTAR" | "CORRER" | "CAMINAR" | "TROTAR"
*/
/* 
let accion = "SALTAR"

switch (accion){
    case "SALTAR":
        console.log("Estoy saltando")
        break
    case "CORRER":
    case "RUN":
        console.log("Estoy corriendo")
        break
    case "CAMINAR":
        console.log("Estoy caminando")
        break
    case "TROTAR":
        console.log("Estoy trotando")
        break
    default:
        console.log ("Acción no definida")
}
 */
/* Solicitar  al usuario un número A (Asumismo que el usuario escribirá correctamente un número)
Solicitar al usario un número B (Asumismo que el usuario escribirá correctamente un número)

USANDO SWITCH
Solicitar  al usuario una operación: 
si la operación es "+" o "sumar" entonces deberemos por consola mostrar el resultado de la suma de A + B es C
Si la operación es "-" o "restar" entonces deberemos por consola mostrar el resultado de la resta A - B es C
Si la operación no es ninguno de los anteriores deberemos decir por consola "Operación Inválida, vuelva a intentar"
*/

/* let numero_A = Number(prompt ("Ingrese un número"))
let numero_B = Number(prompt ("Ingrese otro número"))
let operacion = prompt("Ingrese una operación, puede ser 'sumar' (+) o 'restar' (-)")

switch(operacion){
    case "sumar":
    case "+":
        console.log(numero_A + numero_B)
        break
    case "restar":
    case "-":
        console.log(numero_A - numero_B)
        break
    default: 
        console.log("Operación Inválida, vuelva a intentar")
}

 */


/* WHILE
Es un bucle condicional
el bucle es la repetición de un código
Lo podemos leer como: Mientras esta condición se cumpla volveremos a repetir la acción
SIEMPRE que hagan un WHILE asegurense de verificar que el WHILE pueda ser false, si no vas a tener un bucle infinito
*/

/* let numero = prompt("ingrese un número")
while(isNaN(numero) || numero===null || numero=== ""){
    alert("Error, número no válido")
    numero = prompt ("ingrese el número")  //reasignar 
}

alert("Número válido")

 */

/* 
Solicitar al usuario una operacion (Que puede ser "+", "-", 'sumar', 'restar')
Verificar que la operacion sea valida, en caso de no serlo volver a solicitar
*/

let operacion = prompt("Ingrese una operación")
while(
    operacion !== "+" && 
    operacion !== "-" && 
    operacion !== "sumar" && 
    operacion !== "restar"  
){
    alert ("Error, operación no válida")
    operacion = prompt ("Ingrese una operación")
}
alert("Operación válida") 


