import React from 'react';

interface Props {
    name: string;
    message: string;
}

const GreetingCard : React.FC<Props> = ({name, message}) => {
    return (
        <div style={{ border: '2px solid black', padding: '16px', borderRadius: '8px', maxWidth: '300px', margin: 'auto', textAlign: 'center' }}>
            <h1>Hello, {name}!</h1>
            <p>{message}</p>
        </div>
    );
}

export default GreetingCard;