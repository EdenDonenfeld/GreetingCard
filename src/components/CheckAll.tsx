import React from 'react';
import '../styles/CheckAll.css';

interface Props {
    checkAll: () => void;
}

const CheckAll: React.FC<Props> = ({ checkAll }) => {
    return (
        <button className="check-all-button" onClick={checkAll}>
            Check all Completed
        </button>
    );
}

export default CheckAll;