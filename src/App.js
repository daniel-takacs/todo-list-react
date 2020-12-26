import Form from './components/Form'
import './App.css';
import React, { useState } from 'react';

function App () {

  const [title, setTitle] = useState("text")

    return (
      <div className="App">
        <header className="App-header">
        <h1>{title}</h1>
        </header>
        <Form handleTitleUpdate={setTitle}/>
      </div>
    );
  
}

export default App;
