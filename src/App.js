import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Search from './Component/Search';
import ListMusic from './Component/ListMusic';
import Player from './Component/Player';


//App component
class App extends Component {
  constructor(props){
    super(props);
    //general state
    this.state = {
      results : null,
      selected : null,
    };
  }
  //onSearch
  // arg 1 jam api obj
  // arg 2 event obj
  onSearch (jam ,e){
    let value = e.target.value;
    if(value.length > 0){
      jam.tracks({namesearch:value},(err,data)=> {
        this.setState({results : data.results});
      });
    }
    
    else{
      jam.tracks({namesearch:value},(err,data)=> {
        this.setState({results : null});
      });
    }

  }

  OnAudioSelect(e){

    let position = e.currentTarget.getAttribute("data-position") ;
    //console.log(this.state.results[0]);
    this.setState({selected :this.state.results[position]});
  }

  render() {
    return (
      <div className="App">
        <header className="topHeader">
          <span className="topHeader__left"><img  className="topHeader__logo" width="30" alt="logo" src="/logo-header.png"/>React Jam</span>
          <Search jam={this.props.jam} app={this} />
        </header>

        <ListMusic app={this} />
        <Player current={this.state.selected}/>
      </div>
    );
  }
}

export default App;
