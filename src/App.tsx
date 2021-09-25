import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Jumbotron>{count}</Jumbotron>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
