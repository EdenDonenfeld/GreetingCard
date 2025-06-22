import React from "react";
import { useCounter } from "../hooks/use-counter";
import './PushupTracker.css';

const PushupTracker: React.FC = () => {
    const { count, increment, decrement, reset } = useCounter(0);
    
    return (
        <div className="pushup-container">
            <h1 className="header">Pushup Tracker</h1>
            <p className="pushups">Pushups: {count}</p>
            <button onClick={increment}>One more!</button>
            <button onClick={decrement}>Oppsie</button>
            <button onClick={reset}>Again!</button>
        </div>
    );
}

export default PushupTracker;