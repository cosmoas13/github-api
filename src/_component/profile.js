import React, { Component } from "react";
import notfound from "../image/404.jpg";
import "../_style/style.scss";

class Profile extends Component {
  render() {
    const user = this.props.profile;
    return (
      <>
        {user ? (
          <>
            <div className="container">
              <div className="card-profile">
                <img className="profile" alt="profile" src={user.avatar_url} />
              </div>
            </div>
            <div className="about">
              <>
                {user.name !== null ? (
                  <>
                    <p className="name">
                      <b>{user.name}</b>
                      <p>{user.login}</p>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="name">
                      <b>TANPA NAMA!!</b>
                    </p>
                    <p>{user.login}</p>
                  </>
                )}
              </>
            </div>
            <div className="desc">
              <p>
                <b>{user.followers}</b>&nbsp;&nbsp;Follower
              </p>
              <p>
                <b>{user.following}</b>&nbsp;&nbsp;Following
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
                <b>{user.name}</b>
              </p>
              <p>{user.login}</p>
            </div>
            <div className="desc">
              <p>
                <b>{user.followers}</b>&nbsp;&nbsp;Follower
              </p>
              <p>
                <b>{user.following}</b>&nbsp;&nbsp;Following
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
