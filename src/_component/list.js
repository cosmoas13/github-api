import React, { Component } from "react";
import "../_style/style.scss";
import fork from "../image/fork.png";
import star from "../image/star.svg";
import moment from "moment";

class List extends Component {
  render() {
    const data = this.props.listdata;
    return (
      <>
        <div className="container-repo">
          <div className="repo">
            <div className="repo1">
              <p className="repo2">Repositories</p>
              <p className="repo3">{data.length}</p>
            </div>
          </div>
          {data.map((key, index) => (
            <div className="list" key={index}>
              <div className="listing">
                <div>
                  <a href={key.html_url} target="_blank">
                    <p className="listrepo">{key.name}</p>
                  </a>
                  <div>
                    <p className="type">{key.language}</p>
                  </div>
                  <div className="update">
                    <p className="createdat">
                      Created at&nbsp;
                      {moment(key.created_at).format("MMMM DD YYYY")}
                      &nbsp;&nbsp;&nbsp; last update&nbsp;
                      {moment(key.updated_at)
                        .startOf("hour")
                        .fromNow()}
                    </p>
                  </div>
                </div>
                <div className="ikon">
                  <div className="ikon1">
                    <img className="star" alt="star" src={star} />
                    <h2>star</h2>
                    <p>{key.stargazers_count}</p>
                  </div>
                  <div className="ikon1">
                    <img className="fork" alt="fork" src={fork} />
                    <h2>fork</h2>
                    <p>{key.forks_count}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default List;
