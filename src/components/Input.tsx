import React from 'react';
import '../styles/Input.css';

interface Props {
    addTask: (task: string) => void;
}

const Input: React.FC<Props> = ({ addTask }) => {
    const [name, setName] = React.useState('');

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (name.trim() !== '') {
                addTask(name);
                setName('');
            }
        }
    }

    return (
        <div>
            <input 
                type="text" 
                name="task-input" 
                className="task-input" 
                placeholder="Insert Task and Hit Enter"
                onKeyDown={(e) => handleKeyPress(e)} 
                onChange={(e) => setName(e.target.value)}
                value={name}  
            />
        </div>
    );
}

export default Input;