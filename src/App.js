import React, { Component } from 'react';
import Screen from './components/Screen';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  render() {
    return (
      <div className="App">
        <Screen />
      </div>
    );
  }
}
export default App;
