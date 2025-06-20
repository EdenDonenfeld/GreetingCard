import React from 'react';
import '../styles/Calculator.css';

const Calculator: React.FC = () => {
    return (
        <div className="calculator">
            <div className="result">0</div>
            <div className="buttons">
                <button className="rest">+</button>
                <button className="rest">-</button>
                <button className="rest">x</button>
                <button className="rest">/</button>

                <button className="number">7</button>
                <button className="number">8</button>
                <button className="number">9</button>

                <button className="number">4</button>
                <button className="number">5</button>
                <button className="number">6</button>
                
                <button className="number">1</button>
                <button className="number">2</button>
                <button className="number">3</button>

                <button className="number">0</button>
                <button className="rest">.</button>
                <button className="rest">C</button>

                <button className="equal">=</button>
            </div>
        </div>
    );
};

export default Calculator;