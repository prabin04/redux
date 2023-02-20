import React, { useReducer, useState} from 'react'
import './App.css';

const ACTIONS = {
  ADD_TODO: 'add-todo'
  NEW_TODO: 'new-todo'
}

function reducer(state, action){
  switch (action.type)
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(name)]

}

function newTodo(name){
  return {id: Date.now(), name: name, complete: false}
}

function App() {

  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(){
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO})
    setName('')
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
    </>
  );
}

export default App;
