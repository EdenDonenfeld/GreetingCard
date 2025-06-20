import React from 'react';

interface Props {
    value: string;
}

const Button: React.FC<Props> = ({ value }) => {
    return (
        <div>
            {value}
        </div>
    );
}

export default Button;