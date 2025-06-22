import React, { useEffect, useState } from "react";
import './Button.css';

const Button: React.FC = () => {
    const [message, setMessage] = useState<string>("");
    const [lastClick, setLastClick] = useState<number>(0);

    useEffect(() => {
        const id = setInterval(() => {
            setLastClick(prev => prev + 1);
        }, 1000);
        return () => clearInterval(id);
    }, []);

    const handleClick = () => {
        if (lastClick < 6) {
            setMessage("Wait 6 seconds before clicking again.");
        } else {
            setMessage("Schnitzel is on its way!");
            setLastClick(0);
        }
    }

    return (
        <div className="button-container">
            <button className="button" onClick={() => handleClick()}>
            I want Schnitzel
            </button>
            <p className="message">{message}</p>
        </div>
    );
}

export default Button;