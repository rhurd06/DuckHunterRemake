import React, { Component } from "react";
import { game } from "./phaser/phaser";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="phaser" id="phaser" />
      </div>
    );
  }
}

export default App;
