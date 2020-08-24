import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './components/Header'
import Form from './components/Form'
import Gallery from './components/Gallery'
import './App.css';

class App extends Component {
  state = {
    seen: false,
    id: null,
  };

  togglePop = (i) => {
    this.setState({
      seen: !this.state.seen,
      id: this.state.seen ? null:i,
    })};

  render() {
    return (
      <div className="App">
        <Header/>
        <Form/>
        <Gallery togglePop={this.togglePop} seen={this.state.seen} id={this.state.id}/>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
