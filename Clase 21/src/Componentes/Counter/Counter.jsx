import {useState} from "react";
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);
    function handleIncrement () {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    console.log("[Counter.jsx] Me renderize]")
    /* 
    Contador parte 2:
    Si el contador vale 10 poner un mensaje en rojo indicando 'Has alcanzado el limite' y deshabilitar el boton de sumar
    Si el contador vale 0: 
        - debe haber un boton de comprar unicamente (este al dar click incrementara el contador)
        - No estaran el boton de +, - o el contador
    */
    
    return (
        <div className="counter-wrap">
            <h2>Contador</h2>
            {count === 0 && (
                <button className= "btn_buy" onClick={handleIncrement} disable = {count !== 0}>Comprar</button>
            )}
            {count !== 0 && (
                <div>
                    <button className= "btn_resta"onClick={handleDecrement}>-</button>
                    <span> {count} </span>
                    <button className= "btn_suma" onClick={handleIncrement} disabled = {count >= 10}>+</button>
                </div>
            )}
            {count === 10 && (
                <span>¡Haz alcanzado el límite!</span>
            )}
        </div>
    );
}

export default Counter;