import React from 'react';

interface Props {
    value: string;
    className: string;
    onClick: (value: string) => void;
}

const Button: React.FC<Props> = ({ value, className, onClick }) => {
    return (
        <button className={className} onClick={() => onClick(value)}>
            {value}
        </button>
    );
}

export default Button;