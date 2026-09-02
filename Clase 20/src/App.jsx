import React from 'react'
import ProductCard from './Componentes/ProductCard/ProductCard'
import Message from './Componentes/Message/Message'
import "./index.css"

export default function App() {
    let precio = 40000
    return (
        <div>
            <h1>Hola mundo!</h1>
            <a>Click aqui</a>
            <div>
                El valor del iva de {precio} es {precio * 0.21}
            </div>
            <ProductCard 
                title = {"Tv Samsung 32"}
                price = {700000}
                description = {"resolución HD"}
                isOnlyForMembers = {true}
            />
            <ProductCard 
                title = {"Tv Android 50"}
                price = {4000}
                description = {"resolucion full HD"}
                isOnlyForMembers = {false}
            />
            <ProductCard 
                title = {"Tv Samsung 52"} 
                price = {60000}
                description = {"full HD"}
                isOnlyForMembers = {true}
            />
        <hr />
            <div className="chat-wrap">
                <div className="chat-body">
                    <Message
                        autor = {"sender"}
                        contenido = {"Hello, i was wondering when my order will be shipped?"}
                        fecha = {"1:30 PM"}
                        estatus_envio = {"visto"}
                    />
                    <Message
                        autor = {"receiver"}
                        contenido = {"Your order has been processed and we are preparing your item for shipment shortly. We will send you a notification on WhatsApp once it has been shipped."}
                        fecha = {"1:32 PM"}
                        estatus_envio = {"enviado"}
                    />
                    <Message
                        autor = {"sender"}
                        contenido = {"Thank you!"}
                        fecha = {"1:32 PM"}
                        estatus_envio = {"visto"}
                    />
                    <Message
                        autor = {"receiver"}
                        contenido = {"Your order has been shipped and is spected to be delivered on May 5, 2018"}
                        fecha = {"12:00 PM"}
                        estatus_envio = {"Enviado"}
                    />
                </div>
            </div>
            
        </div>
    )
}
