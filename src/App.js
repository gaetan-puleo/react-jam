import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Component/Search';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="topHeader">  
          <Search />
        </header>
      </div>
    );
  }
}

export default App;
