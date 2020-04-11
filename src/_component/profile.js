import React, { Component } from "react";
import notfound from "../image/kevin.jpg";
import "../_style/style.scss";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="card-profile">
            <img className="profile" alt="profile" src={notfound} />
          </div>
        </div>
        <div className="about">
          <p className="name">
            <b>Kevin</b>
          </p>
          <p>Cosmoas13</p>
        </div>
        <div className="desc">
          <p>
            <b>30</b>&nbsp;&nbsp;Follower
          </p>
          <p>
            <b>25</b>&nbsp;&nbsp;Following
          </p>
        </div>
        <div className="container">
          <div className="email">
            <p>cosmoas13@gmail.com</p>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
