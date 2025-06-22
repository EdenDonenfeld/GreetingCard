import React, { useState, useEffect, use } from 'react';
import { useList } from '../hooks/use-list';
import './FuriousFiveManager.css';

const FuriousFiveManager: React.FC = () => {
    const { list, set, push, removeAt, filter, clear, sort } = useList<{ name: string; mood: string }>([]);
    
    const [name, setName] = useState<string>('');
    const [mood, setMood] = useState<string>('');
    
    useEffect(() => {
        set([
            { name: 'Tiger', mood: 'Angry' },
            { name: 'Monkey', mood: 'Happy' },
            { name: 'Mantis', mood: 'Calm' },
            { name: 'Viper', mood: 'Relaxed' },
            { name: 'Crane', mood: 'Focused' }
        ]);
    }, []);

    return (
        <div className="container">
            <h1>Furious Five Manager</h1>
            <p>
                {list.map((item, index) => (
                    <div className="item-container">
                        <span key={index} className="item">
                            {item.name} - {item.mood}
                        </span>
                        <button onClick={() => removeAt(index)}>
                            Remove {item.name} 
                        </button>
                    </div>
                ))}
            </p>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                </input>
                <input
                    type="text"
                    placeholder="Mood"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}>
                </input>
                <button onClick={() => push({ name: name, mood: mood })}>
                    Add Member
                </button>
            </div>
            <div className="buttons-container">
                <button onClick={() => clear()}>Send to task</button>
                <button onClick={() => filter(item => item.mood.toLowerCase() === 'angry')}>Filter Angry</button>
                <button onClick={() => sort((a, b) => a.name.localeCompare(b.name))}>Sort by Name</button>
            </div>
        </div>
    );
}

export default FuriousFiveManager;