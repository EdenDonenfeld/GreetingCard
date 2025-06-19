import React, {useState} from 'react';
import './Counter.css';


const Counter: React.FC = () => {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter((Number(counter) + 1));
    }

    const decreaseCounter = () => {
        setCounter((Number(counter) - 1));
    }

    return (
        <div className="counter-container">
            <h1>Counter Website</h1>
            <input 
                name="counter-input"
                className="counter-input"
                type="number" 
                value={counter} 
                onChange={(e) => setCounter(Number(e.target.value))}
            />
            <div className="buttons-container">
                <button className="button" onClick={increaseCounter}>+</button>
                <button className="button" onClick={decreaseCounter}>-</button>
            </div>
        </div>
    )
}

export default Counter;