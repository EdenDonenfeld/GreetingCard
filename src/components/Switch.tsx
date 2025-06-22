import React, { useState } from 'react';
import { useToggle } from './use-toggle';
import './Switch.css';

const Switch: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const { isToggled, toggle } = useToggle(false);

    const handleToggle = () => {
        toggle();
        setMessage( isToggled ? 'Working out!' : 'Watching TV!');
    }

    return (
        <div className="switch-container">
            <button className="switch" onClick={() => handleToggle()}>
                Switch
            </button>
            <p className="message">
                {message}
            </p>
        </div>
    )
    

}

export default Switch;