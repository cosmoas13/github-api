import React, { Component } from "react";
import Header from "../_component/header";
import "../_style/style.scss";

class Headers extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="item1">
          <Header />
        </div>
        <div className="item2">Menu</div>
        <div className="item3">Main</div>
      </div>
    );
  }
}

export default Headers;
