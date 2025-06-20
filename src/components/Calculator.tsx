import React, { useState } from 'react';
import '../styles/Calculator.css';
import Button from './Button';

const Calculator: React.FC = () => {
    const [result, setResult] = useState<string>('0');

    const handleButtonClick = (value: string) => {
        if (value === 'C') {
            setResult('0');
            return;
        }
        if (['+', '-', 'x', '/', '='].includes(value)) {
            // Handle operator logic here
        }
        else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(value)) {
            if (result === '0' && value !== '.') {
                setResult(value);
            } else {
                setResult(result + value);
            }
            return;
        }
    }

    return (
        <div className="calculator">
            <div className="result">{result}</div>
            <div className="buttons">
                {['+', '-', 'x', '/'].map(operator => (
                    <Button 
                        key={operator} 
                        value={operator} 
                        className="rest" 
                        onClick={() => handleButtonClick(operator)} 
                    />
                ))}

                {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'].map(number => (
                    <Button 
                        key={number}
                        value={number}
                        className="number"
                        onClick={() => handleButtonClick(number)}
                    />
                ))}

                {['.', 'C'].map((special) => (
                    <Button
                        key={special}
                        value={special}
                        className="rest"
                        onClick={() => handleButtonClick(special)}
                    />
                ))}
                
                <button className="equal">=</button>
            </div>
        </div>
    );
};

export default Calculator;