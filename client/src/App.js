import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import './App.css';

import { initialState, reducer } from './reducers/reducer';

import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <TodoForm/>
      <TodoList item={state}/>
    </div>
  );
}

export default App;
