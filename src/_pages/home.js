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
    data1: []
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
    axios.get(`https://api.github.com/users/${this.state.search}`).then(res => {
      const data1 = res.data;
      this.setState({ data1 });
    });
    this.setState({
      search: ""
    });
  };

  render() {
    const user = this.state.data1;
    return (
      <>
        <Header />
        <div className="grid-container">
          <div className="item2">
            <Profile profile={user} />
          </div>
          <div className="item3">
            <div className="topnav">
              <form onSubmit={this.handleclick}>
                <div className="container-search">
                  <input
                    type="text"
                    placeholder="Search.."
                    onChange={this.handlechange}
                    value={this.state.search}
                  />
                  <button type="submit" className="button button1">
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
