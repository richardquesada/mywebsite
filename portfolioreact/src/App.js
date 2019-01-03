import React, { Component } from "react";
import "./css/main.css";

import Header from "./header.js";
import Main from "./main.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
