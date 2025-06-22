import React, { useState, useEffect } from "react";

const Button: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "20px", fontSize: "24px", backgroundColor: "skyblue", padding: "20px" }}>
            It's been {count} seconds since you opened this page.
        </div>
    );
}

export default Button;