import React, { useState } from 'react';
import '../styles/Board.css';
import Cell from './Cell';

interface Props {
    turn: string;
    setTurn: (turn: string) => void;
}

const Board: React.FC<Props> = ({ turn, setTurn }) => {
    const [cells, setCells] = useState<string[]>(Array(9).fill(''));
    const [winner, setWinner] = useState<string | null>(null);
    const [isDraw, setIsDraw] = useState<boolean>(false);

    const handleClick = (index: number) => {
        if (cells[index] !== '') {
            return;
        }

        const newCells = [...cells];
        newCells[index] = turn;
        setCells(newCells);
        setTurn(turn === 'X' ? 'O' : 'X');

        const winner = checkWinner(newCells);
        if (winner) {
            setWinner(winner);
            setTimeout(() => {
                resetGame();
            }, 2000);
        } else {
            if (newCells.every(cell => cell !== '')) {
                setIsDraw(true);
            }
        }
    }

    const resetGame = () => {
        setCells(Array(9).fill(''));
        setWinner(null);
        setIsDraw(false);
        setTurn('X');
    }

    const checkWinner = (cells: string[]) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (const combination of winningCombinations) {
            const [first, second, third] = combination;
            if (cells[first] && cells[first] === cells[second] && cells[first] === cells[third]) {
                return cells[first];
            }
        } 
        return null;
    }

    return (
        <div>
            <div className="board">
                <div className="board-row">
                    {[0, 1, 2].map((cellIndex) => (
                        <Cell 
                            key={cellIndex} 
                            value={cells[cellIndex]} 
                            onClick={() => handleClick(cellIndex)} 
                            index={cellIndex} 
                        />
                    ))}    
                </div>
                <div className="board-row">
                    {[3, 4, 5].map((cellIndex) => (
                        <Cell 
                            key={cellIndex} 
                            value={cells[cellIndex]} 
                            onClick={() => handleClick(cellIndex)} 
                            index={cellIndex} 
                        />
                    ))}    
                </div>
                <div className="board-row">
                    {[6, 7, 8].map((cellIndex) => (
                        <Cell 
                            key={cellIndex} 
                            value={cells[cellIndex]} 
                            onClick={() => handleClick(cellIndex)} 
                            index={cellIndex}
                        />
                    ))}    
                </div>
            </div>
            <div className="turn-indicator">
                { winner ? (
                    <h1>Winner: {winner}</h1>
                ) : isDraw ? (
                    <h1>It's a Draw!</h1>
                ) : (
                    <h2>Current Turn: {turn}</h2>
                )}
            </div>  

        </div>  
    );
}

export default Board;