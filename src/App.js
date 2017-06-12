import React, { Component } from 'react';
import './App.css';
import TimelineComponent from "./components/TimelineComponent/index";
import SingUp from "./components/SignUp/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SingUp/>
      </div>
    );
  }
}

export default App;
