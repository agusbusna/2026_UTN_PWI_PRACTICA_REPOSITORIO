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

    return (
        <div>
            <h2>Contador</h2>
            <br/>
            <button className= "btn_resta"onClick={handleDecrement}>-</button>
            <span> {count} </span>
            <button className= "btn_suma" onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Counter;