import React, { Component } from "react";
import Header from "../_component/header";
import Profile from "../_component/profile";
import ListRepo from "../_component/list";
import "../_style/style.scss";
import axios from "axios";

class Headers extends Component {
  state = {
    search: "",
    data: [],
    data1: [],
    data2: []
  };

  handlechange = e => {
    e.preventDefault();
    this.setState({
      search: e.target.value
    });
    console.log(e.target.value);
  };

  handleclick = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.search}/repos`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      });
    axios
      .get(`https://api.github.com/users/${this.state.search}/followers`)
      .then(res => {
        const data1 = res.data;
        this.setState({ data1 });
      });
    axios
      .get(`https://api.github.com/users/${this.state.search}/following`)
      .then(res => {
        const data2 = res.data;
        this.setState({ data2 });
      });
    this.setState({
      search: ""
    });
  };

  render() {
    const user = this.state.data[0];
    return (
      <>
        <Header />
        <div className="grid-container">
          <div className="item2">
            <Profile
              profile={user}
              follower={this.state.data1}
              following={this.state.data2}
            />
          </div>
          <div className="item3">
            <div className="topnav">
              <form>
                <div className="container-search">
                  <input
                    type="text"
                    placeholder="Search.."
                    onChange={this.handlechange}
                    value={this.state.search}
                  />
                  <button
                    type="button"
                    className="button button1"
                    onClick={this.handleclick}
                  >
                    Find Repository
                  </button>
                </div>
              </form>
            </div>
            {this.state.data.length > 0 ? (
              <ListRepo listdata={this.state.data} />
            ) : (
              <div className="notfound">
                <h1>No Repositories found</h1>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Headers;
