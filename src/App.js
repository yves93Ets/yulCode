import React, { Component } from 'react';
import Screen from './components/Screen';
import MenuComponent from './components/MenuComponent';
import './App.css';

let dim = { w: '400px', h: '200px' };

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Screen dim={dim} />
        <Screen dim={dim} />
        <Screen dim={dim} />
        <div>
          <MenuComponent />
        </div>
      </div>
    );
  }
}
export default App;
