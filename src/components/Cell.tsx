import React from 'react';
import '../styles/Cell.css';

interface Props {
    text: string;
}

const Cell: React.FC<Props> = ({ text }) => { 
    return (
        <div className="cell">
            {text}
        </div>
    );
}

export default Cell;