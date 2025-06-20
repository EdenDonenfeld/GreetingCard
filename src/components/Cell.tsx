import React from 'react';
import '../styles/Cell.css';

interface Props {
    value: string;
    onClick: () => void;
    index: number;
}

const Cell: React.FC<Props> = ({ value, onClick, index }) => { 
    const borderStyle = {
        borderTop: index < 3 ? 'none' : '1px solid #000',
        borderLeft: index % 3 === 0 ? 'none' : '1px solid #000',
        borderRight: (index + 1) % 3 === 0 ? 'none' : '1px solid #000',
        borderBottom: index >= 6 ? 'none' : '1px solid #000',
    };

    return (
        <div className="cell" style={borderStyle} onClick={onClick} aria-disabled={value !== ''}>
            {value}
        </div>
    );
}

export default Cell;