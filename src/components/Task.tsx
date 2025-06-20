import React from 'react';
import '../styles/Task.css';

interface Props {
    name: string;
    isChecked: boolean;
    toggleChecked: (index: number) => void;
    index: number;
}
const Task: React.FC<Props> = ({ name, isChecked, toggleChecked, index }) => {
    return (
        <div className="task-container">
            <div className="right-side">
                <input
                    type="checkbox"
                    name="isChecked"
                    checked={isChecked}
                    onChange={() => toggleChecked(index)}
                />
                <p className={isChecked ? 'task-name-checked': ''}>{name}</p>
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: isChecked ? 'green' : 'red' }}>
                {isChecked ? 'V' : 'X'}
            </p>
        </div>
    );
}

export default Task;