import React from 'react';
import '../styles/Board.css';
import Cell from './Cell';

const Board: React.FC = () => {
    return (
        <div className="board">
            <div className="board-row">
                <Cell text="X" />
                <Cell text="O" />
                <Cell text="X" />
            </div>
            <div className="board-row">
                <Cell text="X" />
                <Cell text="O" />
                <Cell text="X" />
            </div>
            <div className="board-row">
                <Cell text="X" />
                <Cell text="O" />
                <Cell text="X" />
            </div>
        </div>
    );
}

export default Board;