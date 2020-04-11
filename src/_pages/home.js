import React, { Component } from "react";
import Header from "../_component/header";
import Profile from "../_component/profile";
import Search from "../_component/search";
import ListRepo from "../_component/list";
import "../_style/style.scss";
import axios from "axios";

class Headers extends Component {
  state = {
    search: "",
    data: []
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/cosmoas13/repos`).then(res => {
      const data = res.data;
      this.setState({ data });
    });
    this.setState({
      search: ""
    });
  }

  render() {
    const user = this.state.data[0];
    return (
      <>
        <Header />
        <div className="grid-container">
          <div className="item2">
            <Profile profile={user} />
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
