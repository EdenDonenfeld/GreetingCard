import React from 'react';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

const InnerPeacePrinciples: React.FC = () => {
    const [isCopied, copy] = useCopyToClipboard();

    const principles = [
        'Practice mindfulness and meditation.',
        'Embrace simplicity and minimalism.',
        'Foster gratitude and appreciation.',
    ];

    return (
        <div className="inner-peace-principles">
            <h2>Inner Peace Principles</h2>
            <ul>
                {principles.map((principle, index) => (
                    <li key={index}>
                        {principle}
                        <button onClick={() => copy(principle)}>
                            {isCopied ? 'Copied!' : 'Copy'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default InnerPeacePrinciples;