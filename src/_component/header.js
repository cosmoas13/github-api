import React, { Component } from "react";
import "../_style/style.scss";

class Headers extends Component {
  render() {
    return (
      <header>
        <div className="app-bar">
          <img alt="" src="/github.svg" width="30" height="30" />
          <p>&nbsp;Github-API</p>
        </div>
      </header>
    );
  }
}

export default Headers;
