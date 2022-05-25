import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log('sadas');
  const rrs = 3;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit {rrs}
          <code>src/App.js</code>
          and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/// 이거는 npx eslint --init 으로 생성

export default App;
