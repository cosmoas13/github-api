import React, { Component } from "react";
import "../_style/style.scss";
import fork from "../image/fork.png";
import star from "../image/star.svg";

class List extends Component {
  render() {
    return (
      <>
        <div className="container-repo">
          <div className="repo">
            <div className="repo1">
              <p className="repo2">Repositories</p>
              <p className="repo3">20</p>
            </div>
          </div>
          <div className="list" key="">
            <div className="listing">
              <div>
                <a href="/" target="_blank">
                  <p className="listrepo">tds-frontend-developer</p>
                </a>
                <div>
                  <p className="type">Javascript</p>
                </div>
                <div className="update">
                  <p className="createdat">
                    Created at&nbsp;
                    {/* {moment(12 - 03 - 2020).format("MMMM DD YYYY")} */}
                    &nbsp;&nbsp;&nbsp; last update&nbsp;
                    {/* {moment(12 - 03 - 2020)
                    .startOf("hour")
                    .fromNow()} */}
                  </p>
                </div>
              </div>
              <div className="ikon">
                <div className="ikon1">
                  <img className="star" alt="star" src={star} />
                  <h2>star</h2>
                  <p>2</p>
                </div>
                <div className="ikon1">
                  <img className="fork" alt="fork" src={fork} />
                  <h2>fork</h2>
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default List;
