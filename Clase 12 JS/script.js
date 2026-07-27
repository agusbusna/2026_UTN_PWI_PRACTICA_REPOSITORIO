
/* console.log('hola mundo') */

//TIPOS DE DATOS primitivos
//Numéricos
16
7
-40
1.2
-1.2

//String
'hola'
'mati'
'1'
'qué tal?'
'hola\"'

//Booleanos
true
false

//null
null

//undefined
undefined

//Constructores o Transformadores
Number('1')//1
Number('hola')//NaN
String(50) //"50"

// Si boolean devuelve verdadero decimos que un dato es Truthy
Boolean(50) //true

//Si no, es falsy
Boolean(0) //false
Boolean(null)//false
Boolean(undefined)//false
Boolean('') //false
Boolean (NaN) //false


//Comparadores (nos permiten comparar datos) ((Siempre nos devuelven Booleanos))

//Es igual a: ==
'mati'=='mati'
1=='1'

//Es estrictamente igual a: === (Recomendable)
1==='1'
//Es distinto de: !=
1 !=2
1 !='1'
//Es estrictamente distinto de: !==
1!=='1'
//Es mayor a: >
//Es menor a: <
//Es mayor igual: =>
//Es menor igual: <=

//Excepcion de NaN 
//Nan es un dato UNICO, es el único dato que es incomparable, ni siquiera consigo mismo. 
NaN==NaN  // false. 
//La forma correcta de saber si un valor es NaN es mediante la funcion nativa isNaN()

isNaN('hola') //true
isNaN('1') //false

//Operadores lógicos

//NOT: !
//  (Podemos hacer negaciones lógicas)
// Nos va a devolver el valor booleano opuesto

!(true)//False
!('hola') //false
!(Number('hola')) //false

//esDeDia = true
//esDeNoche = !esDeDia

//OR
//Sirve para hacer condiciones compuestas. 
//Va a seleccionar un valor entre 2 valores
//Si el primero es Truthy se queda con el primero, sino con el segundo
70||90
Number('8') || null //Number('8')
null|| undefined //undefined

//Contesto la pregunta si estoyLibre o esHorarioLaboral
/* contestoPregunta= estoyLibre|| esHorarioLaboral
 */
//AND
//Sirve para hacer condiciones compuestas. 
//Va a seleccionar un valor entre 2 valores
//Si el primero es Truthy se queda con el segundo,
// Si el primero es falsy se queda con el primero

0 && true// 0
false && null //false
50 && undefined //undefined

//Operadores aritméticos

//Concatenacion: +
//Ocurre cuando hay un string en la operación
//Transforma cualquier valor no string a string y concatena (unifica las cadenas)
50 + 'hola' 
//String(50) + 'hola'
// '50' + 'hola' = '50hola'

'1' + 1 //'11'
null + '' // 'null'


//Suma: +
//Ocurre cuando NO hay un string en la operación
//Siempre devuelve numérico
//Cualquier operaciòn (excepto la concatenación) con NaN da NaN

40 + 60 // 100
true + 1 // 2
50 + Number('hola') // NaN

//Resta:-
//Transforma cualquier valor no numérico en número y resta
//siempre devuelve número

50 -'1' //49

//División: /
//Multiplicación: * 


//Variables
//Podemos guardar los datos que venimos creando

//VAR antes de ES6 (NO SE RECOMIENDA USAR)
//podes declarar
//podes reasignar
//Tiene hoisiting
//El valor por defecto, si no asignas algo, es undefined
/* 
var nombre = 'pepe'
console.log("hola mi nombre es " + nombre)
nombre = nombre + ' suarez '
 */
//LET + ES6
//podes reasignar
//El valor por defecto, si no asignas algo, es undefined
//Podes redeclarar (en distinto bloque)
//NO tiene Hoisting

/* let nombre = 'pepe'

{
    let nombre = 'jose'
    console.log (nombre)
}
{
    nombre = 'maria'
}
console.log(nombre)
 */
//CONST + ES6
// NO podes reasignar
// NO tiene valor por defecto
// NO Podes redeclarar (en distinto bloque)
// NO tiene Hoisting
// Se usa para valores que seran iguales desde el inicio hasta el final del programa

/* const app_version = '1.0'
const IVA = 21 */

let nombre = prompt('Ingrese su nombre de usuario')

if(nombre == 'pedro'){
    console.log("Qué haces acá, campeón?")
}
else{
    console.log("Bienvenido/a " + nombre + '!')
}



let contrasenia = prompt('Ingrese su contraseña')

if(contrasenia == 'password_123'){
    console.log("Inicio de sesión exitoso")
}
else{
    console.log("Credenciales inválidas, vuelva a intentar")
}

/* 
Solicitar al usuario una contraseña, si la contraseña coincide con password_123 decir 'Inicio de sesion exitoso' sino decir 'Credenciales invalidas, vuelva a intentar'
*/

