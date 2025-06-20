import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [turn, setTurn] = useState<string>('X');

  return (
    <div className='App'>
      <header className='header'>
        <img src="cheetos.png" alt="Cheetos Logo" style={{ width: '60px', height: 'auto' }} />
        <h1>Cheetos Tic-Tac-Toe Game</h1>
        <img src="cheetos.png" alt="Cheetos Logo" style={{ width: '60px', height: 'auto' }} />
      </header>
      <Board turn={turn} setTurn={setTurn}/>
    </div>
  );
}

export default App;
