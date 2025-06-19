import React from 'react';
import './App.css';
import UserList from './components/UserList';

function App() {
  const users = ['Eden', 'Noam', 'Koral'];
  return (
    <UserList users={users}/>
  );
}

export default App;
