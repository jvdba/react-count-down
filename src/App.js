import React from 'react';
import CountDown from './components/CountDown'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is CountDown Timer</p>
        <CountDown hours="1" minutes="30" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          See On Github
        </a>
      </header>
    </div>
  );
}

export default App;
