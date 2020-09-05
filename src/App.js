import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserMessage from './components/UserMessage';
import UsersComponent from './components/UsersComponent'
import Content from './components/Content'
import GetRequest from './components/GetRequest'

function App() {
  return (
    <div className="App">
      {/* <UserMessage /> */}
      {/* <UsersComponent /> */}
      {/* <Content /> */}
      <GetRequest />
    </div>
  );
}

export default App;
