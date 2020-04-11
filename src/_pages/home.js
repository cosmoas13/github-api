import React, { Component } from "react";
import Header from "../_component/header";
import Profile from "../_component/profile";
import Search from "../_component/search";
import ListRepo from "../_component/list";
import "../_style/style.scss";

class Headers extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="grid-container">
          <div className="item2">
            <Profile />
          </div>
          <div className="item3">
            <Search />
            <ListRepo />
          </div>
        </div>
      </>
    );
  }
}

export default Headers;
