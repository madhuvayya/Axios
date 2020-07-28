import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserMessage from './components/UserMessage';
import UsersComponent from './components/UsersComponent'

function App() {
  return (
    <div className="App">
      {/* <UserMessage /> */}
      <UsersComponent />
    </div>
  );
}

export default App;
