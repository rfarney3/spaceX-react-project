import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LaunchList from "./components/LaunchList.js"

class App extends Component {
  render() {
    return (
      <div>
        <LaunchList />
      </div>
    );
  }
}

export default App;
