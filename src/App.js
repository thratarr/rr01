import React, {useState,setState} from 'react';
//import logo from './logo.svg';
import Header from './components/Header'
import Form from './components/Form'
import Gallery from './components/Gallery'
import './App.css';

const App = () => {
    return (
      
      <div className="App">
        {console.log('render')} 
        <Header/>
       <Form/>
        <Gallery/>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );

}

export default App;
