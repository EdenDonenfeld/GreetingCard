import React from 'react';

const Board: React.FC = () => {
    return (
        <div className="board" style={{ display: 'flex', flexDirection: 'column', width: '300px', height: '300px' }}>
            <div className="board-row" style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ border: '1px solid black' }}>X</div>
                <div style={{ border: '1px solid black' }}>X</div>
                <div style={{ border: '1px solid black' }}>X</div>
            </div>
                <div className="board-row" style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ border: '1px solid black' }}>X</div>
                <div style={{ border: '1px solid black' }}>X</div>
                <div style={{ border: '1px solid black' }}>X</div>
            </div>
                <div className="board-row" style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ border: '1px solid black' }}>X</div>
                <div style={{ border: '1px solid black' }}>X</div>
                <div style={{ border: '1px solid black' }}>X</div>
            </div>
        </div>
    );
}

export default Board;