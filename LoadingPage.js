import React, { Component } from 'react';
import { render } from 'react-dom';
//import Hello from './Hello';
import './style.css';

class LoadingPage extends React.Component {
constructor(props){
  super(props)

  this.state = {
    text: 'Loading'
  }
}

  render(){

    return <p> {this.state.text} </p>

  }
}

export default LoadingPage;