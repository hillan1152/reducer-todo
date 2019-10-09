import React, { useReducer } from 'react';
import { ToDoForm } from '../src/components/ToDoForm'

import { reducer, initialState } from './reducers/reducer';
import './App.css';



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('this is state',state)
  return (
    <div className="App">
      <ToDoForm dispatch={dispatch}/>
    </div>
  );
}

export default App;
