import React, {useState} from 'react'
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  }

  function decrement(){
    setCount(count-1);
  }

  return (
    <div class="App">
      <button onClick={increment}>+</button>
        <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
