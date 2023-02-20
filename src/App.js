import React, { useReducer} from 'react'
import './App.css';

function reducer(state, action){
  switch(action.type){
    case 'increment':
      return {count: state.count +1}
    case 'decrement':
      return{count: state.count - 1}
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {count: 0})

  function increment(){
    dispatch({type: 'increment'})
  }

  function decrement(){
    dispatch({type: 'decrement'})
  }

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
        <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
