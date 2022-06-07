import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  const rrs = 3;
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

/// 이거는 npx eslint --init 으로 생성

export default App;
