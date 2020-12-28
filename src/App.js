import Form from './components/Form';
import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App () {

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    return (
      <div className="App">
        <header className="App-header">
        <h1>Todo List</h1>
        </header>
        <Form inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    );
  
}

export default App;
