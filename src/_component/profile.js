import React, { Component } from "react";
import notfound from "../image/404.jpg";
import "../_style/style.scss";

class Profile extends Component {
  render() {
    const user = this.props.profile;
    const name = this.props.findname;
    return (
      <>
        {user ? (
          <>
            <div className="container">
              <div className="card-profile">
                <img
                  className="profile"
                  alt="profile"
                  src={user && user.owner.avatar_url}
                />
              </div>
            </div>
            <div className="about">
              <p className="name">
                <b>{name && name.name}</b>
              </p>
              <p>{user && user.owner.login}</p>
            </div>
            <div className="desc">
              <p>
                <b>{this.props.follower.length}</b>&nbsp;&nbsp;Follower
              </p>
              <p>
                <b>{this.props.following.length}</b>&nbsp;&nbsp;Following
              </p>
            </div>
            <div className="container">
              <div className="email">
                <p>cosmoas13@gmail.com</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container">
              <div className="card-profile">
                <img className="profile" alt="profile" src={notfound} />
              </div>
            </div>
            <div className="about">
              <p className="name">
                <b>{name && name.name}</b>
              </p>
              <p>{user && user.owner.login}</p>
            </div>
            <div className="desc">
              <p>
                <b>{this.props.follower.length}</b>&nbsp;&nbsp;Follower
              </p>
              <p>
                <b>{this.props.following.length}</b>&nbsp;&nbsp;Following
              </p>
            </div>
            <div className="container">
              <div className="email">
                <p>cosmoas13@gmail.com</p>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Profile;
