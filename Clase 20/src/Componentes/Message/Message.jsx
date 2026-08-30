import "./Message.css"

function Message (propiedades){
    return (
        <div className={'message-box ' + (propiedades.autor === "sender" ? 'message-box--me' : '')}>
            <p className= "msg-text">
                {propiedades.contenido}
                <span className= "message-date-and-status">
                {propiedades.fecha} {propiedades.autor === "sender" ? propiedades.estatus_envio : ""}
                </span>
            </p>
        </div>
    )
}

export default Message