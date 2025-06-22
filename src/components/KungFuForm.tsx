import React, { useState } from 'react';
import { usePrevious } from '../hooks/use-previous';
import './KungFuForm.css';

const KungFuForm: React.FC = () => {
    const [currentForm, setCurrentForm] = useState<string>('עגור');
    const previousValue = usePrevious(currentForm);

    const otherForms = ['נמר', 'נחש', 'קוף', 'עגור'];

    const handleChangeForm = (form: string) => {
        setCurrentForm(form);
    };

    return (
        <div className="container">
            <h1>Kung Fu Forms</h1>
            <p>
                Current Form: <strong>{currentForm}</strong>
            </p>
            <p>
                Previous Form: <strong>{previousValue}</strong>
            </p>
            <div className="buttons-container">
                {otherForms.map((form) => (
                    <button
                        className="form-button"
                        key={form} 
                        onClick={() => handleChangeForm(form)}>
                        {form}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default KungFuForm;