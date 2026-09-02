
const btn_click =document.getElementById("btn")
/* console.log(btn_click) */

function saludar(){
    const div = getElementById ("contenedor-principal")
    div.innerHTML= `<h1>Hola qué tal?</h1>`
}

/* 
addEventListener es un metodo de los elementos del DOM que permite asociar una funcionalidad a un evento
tiene dos parametros
    1 (string) Tipo de evento
    2 (funcion) Accion
 */

btn_click.addEventListener (
    "click", 
    saludar
)



const btnResta = document.getElementById("btn_cont_resta")
const btnSuma = document.getElementById("btn_cont_suma")
const spanContador = document. getElementById("contador")
//Esto es un estado (concepto de programacion)
//Es inmutable
let contador= 0

function renderContador(){
    spanContador.textContent = contador
}
//Esta funcion es la encargada de modificar el estado
function setContador(valor){
    contador = valor
    renderContador()
}
function sumar(){
    setContador(contador + 1)
}

function restar(){
    setContador(contador - 1)
}

btnResta.addEventListener (
    "click", 
    restar
)

btnSuma.addEventListener(
    "click",
    sumar
)
renderContador
/* 
Contador
- El boton de resta decrementara tu contador
- El boton de suma incrementara tu contador
- El span mostrara el valor del contador (inicialmente 0)
Recomendacion:
- Tener una variable en JS con el valor de tu contador y esa variable mostrarla en el span
*/

/* 
Selector de opciones
Al clickear una opcion la seleccionare, dependiendo de la opcion que seleccione en el div de opcion seleccionada debe aparecer el numero de la opcion (selecciono opcion 1 y debe decir "Opcion seleccionada: 1")
*/
const btn_Opcion_1 = document.getElementById ("btn_1")
const btn_Opcion_2 = document.getElementById ("btn_2")
const btn_Opcion_3 = document.getElementById ("btn_3")
const seleccion = document.getElementById ("option_select")

let opcionSeleccionada = 0

function renderSeleccion(){
    seleccion.textContent = "Opcion seleccionada: " + opcionSeleccionada
}

function setSeleccion(valor){
    opcionSeleccionada = valor
    renderSeleccion()
}

function seleccionarOpcion(evento){
    setSeleccion(evento.target.getAttribute("data-number-option"))
}

btn_Opcion_1.addEventListener ("click", seleccionarOpcion)
btn_Opcion_2.addEventListener ("click", seleccionarOpcion)
btn_Opcion_3.addEventListener ("click", seleccionarOpcion)
renderSeleccion

const formulario_login = document.getElementById ("formulario-login")
function login (evento){
    evento.preventDefault()
    const formulario = evento.target
    const resultado = {
        email: formulario.email.value,
        password: formulario.password.value
    }
    console.log(formulario.email.value)
}

formulario_login.addEventListener("submit", login)