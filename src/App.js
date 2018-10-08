import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  list(){
    const li = document.querySelectorAll(`li`);
    li.forEach(param => param.innerHTML = `React`);
  }
  render() {
    return (
      <div className="App">
        <h1>My component</h1>
        <h2>Title</h2>
        <img src={logo} className="App-logo" onClick={this.list} alt="logo"/>
        <div className="box">
          <ul>
            <li className="first">Click</li>
            <li className="second">on</li>
            <li className="third">React</li>
            <li className="fourth">Ico</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
