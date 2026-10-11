import PropTypes from "prop-types";
import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgSrc, newsUrl } = this.props;

    return (
      <div className="container my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            style={{ height: "150px", width: "100%", objectFit: "cover" }}
            src={imgSrc}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              className="btn btn-primary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
