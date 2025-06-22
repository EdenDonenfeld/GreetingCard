import React, { useEffect, useState } from 'react';
import './WisdomBoard.css';

const WisdomBoard: React.FC = () => {
    const [currentQuote, setCurrentQuote] = useState<string>('');

    const masterShifuQuotes = [
        "The past is history, the future is a mystery, but today is a gift.",
        "There are no accidents.",
        "One often meets their destiny on the road they take to avoid it.",
        "Your mind is like water. When it’s agitated, it becomes difficult to see.",
        "To make something special, you just have to believe it’s special.",
        "There is no charge for awesomeness."];

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * masterShifuQuotes.length);
        setCurrentQuote(masterShifuQuotes[randomIndex]);
    }, []);

    return (
        <div className="wisdom-board">
            {currentQuote}
        </div>
    );
}

export default WisdomBoard;