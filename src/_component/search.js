import React, { Component } from "react";
import "../_style/style.scss";

class Search extends Component {
  render() {
    return (
      <>
        <div className="topnav">
          <form>
            <div className="container-search">
              <input type="text" placeholder="Search.." />
              <button type="button" className="button button1">
                Find Repository
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Search;
