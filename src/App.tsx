import React from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header>
        <h1>Cheetos X-O Game</h1>
      </header>
      <Board />
    </div>
  );
}

export default App;
