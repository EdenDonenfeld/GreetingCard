import React, { useState } from 'react';
import './Calculator.css';
import Button from '../Button/Button';

const Calculator: React.FC = () => {
    const [result, setResult] = useState<string>('0');
    const [firstNumber, setFirstNumber] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);

    const MAX_FLOATS = 8;

    const handleLongFloat = (value: number): string => {
        let newResultString: string = ''
        if (Number.isInteger(value)) {
            newResultString = value.toString();
        } else {
            const floatPart = value.toString().split('.')[1];
            if (floatPart && floatPart.length > MAX_FLOATS) {
                newResultString = parseFloat(value.toFixed(MAX_FLOATS)).toString();
            } else {
                newResultString = value.toString();
            }
        }
        return newResultString;
    }

    const resetCalculator = (result?: string) => {
        setResult(result || '0');
        setFirstNumber(null);
        setOperator(null);
    }

    const handleButtonClick = (value: string) => {
        if (value === 'C') {
            resetCalculator();
            return;
        }

        if (['+', '-', 'x', '/'].includes(value)) {
            if (result !== '0') {
                setFirstNumber(parseFloat(result));
                setOperator(value);
                setResult('0');
            }
            return;
        }

        if (value === '=') {
            let secondNumber: number = 1;
            if (firstNumber !== null && operator && result !== '0') {
                secondNumber = parseFloat(result);
                let newResult: number;
                
                if (operator === '+') {
                    newResult = firstNumber + (secondNumber || 0);
                } else if (operator === '-') {
                    newResult = firstNumber - (secondNumber || 0);
                } else if (operator === 'x') {
                    newResult = firstNumber * (secondNumber || 1);
                } else if (operator === '/') {
                    if (secondNumber === 0) {
                        resetCalculator('Error');
                        return;
                    }
                    newResult = firstNumber / (secondNumber || 1);
                } else {
                    return;
                }

                let newResultString = handleLongFloat(newResult);

                resetCalculator(newResultString);
            }
            return;
        }

        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(value)) {
            if (result === '0') {
                setResult(value);
            } else {
                setResult(result + value);
            }
            return;
        }

        if (value === '.') {
            if (!result.includes('.')) {
                setResult(result + '.');
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
                
                <Button
                    value="="
                    className="equal"
                    onClick={() => handleButtonClick('=')}
                />
            </div>
        </div>
    );
};

export default Calculator;