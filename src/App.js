import Form from './components/Form'
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    title: "text"
  }

  handleTitleUpdate = (newValue) =>{
    this.setState({title: newValue})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>{this.state.title}</h1>
        </header>
        <Form handleTitleUpdate={this.handleTitleUpdate}/>
      </div>
    );
  }
}

export default App;
