import React, { Component } from 'react';
import Screen from './components/Screen';
import './App.css';

let dim = { w: '200px', h: '600px'}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Screen dim={dim}/>
      </div>
    );
  }
}
export default App;
