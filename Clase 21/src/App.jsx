import React, { useEffect, useState } from 'react'
import './global.css'
import ContactList from './Componentes/ContactsList/contactsList'



export default function App() {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsloading] = useState(true)

    const resultado = fetch (
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "GET",
        }
    )
    /* 
    JS maneja la asincronia mediante promesas (es un objeto especial)
    Una promesa tiene tres estados posibles:
        Pendiente - Mientras la operacion asincronica no este resuelta
            Resuelta - Cuando la promesa se resolvio efectivamente
            Rechazada - Si la promesa no se pudo resolver (hubo un error)
     */
    /* 
    fetch es una funcion que ordena
        es una funcion asincronica  y me va a devolver el resultado de la consulta 
    */
    console.log ("Inmediatamente muestra el resultado", resultado)

    async function consultarAlServidor (){
        const respuesta_http = await fetch (
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "GET",
        }
    )
    console.log ("Aguarde a que la tarea sea resuelva y muestro el resultado ", respuesta_http)
    const resultado = await respuesta_http.json()
    console.log (resultado)
    setIsloading (false)
    setResponse (resultado)
    }
    useEffect(
        () => {
            consultarAlServidor()
        },
        []
    )
    console.log (isLoading, response)

    if(isLoading){
        return (
            <div>Cargando</div>
        )
    }

    const lista_posteos_jsx = []
    for (const post of response){
        lista_posteos_jsx.push(
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <hr/>
            </div>
        )
    }
    
    return (
        <div>
            {lista_posteos_jsx}
        </div>
    )
}
/*  
Contactos:
[
{
    id: 1
    nombre: 'Marcos',
    ultimo_mensaje: 'hay que juntarnos!..',
    imagen: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250",
    mensajes_sin_leer: 2,
    fecha_ultimo_mensaje: "12/2/2023 14:30"
},
...sigan completando con almenos 3 contactos
]
Renderizar la lista de contactos
Ejemplo: https://user-images.githubusercontent.com/44744039/224526440-b4eb6a54-4dda-430c-a681-286f5b406fe7.png
*/


/* 
const mensajes_servidor = [
        {
            id: 1,
            autor: "jose",
            contenido: "Hola!",
            fecha: "26 de agosto 2026 11:45"
        },
        {
            id: 2,
            autor: "maria",
            contenido: "Todo bien?",
            fecha: "26 de agosto 2026 11:50"
        },
        {
            id: 3,
            autor: "juan",
            contenido: "Hola! Todo bien, ustedes?",
            fecha: "26 de agosto 2026 11:45"
        },
        {
            id: 4,
            autor: "julia",
            contenido: "Hola!",
            fecha: "26 de agosto 2026 11:45"
        },
        {
            id: 5,
            autor: "diego",
            contenido: "Hola!",
            fecha: "26 de agosto 2026 11:45"
        }
    ]
/* 
    En react tenemos listas de JSX
    Las listas de JSX son arrays donde cada elemento tiene una expresion JSX
    Las listas JSX se renderizan directamente en la pantalla de forma ordenada
     */
/*  const mensajes_jsx = []
    for (const mensaje of mensajes_servidor) {
        mensajes_jsx.push(
            <div key={mensaje.id}>
                <h2>{mensaje.autor}</h2>
                <p>{mensaje.contenido}</p>
                <span>Fecha: {mensaje.fecha}</span>
                <hr />
            </div>
        )
    }


    return (
        <div>
            {mensajes_jsx}
            <ContactList/>
        </div>
    )
    }
    
    
 */
