import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="container my-3">
        <h3 className="text-center">NewsApp - Top Headlines</h3>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="News Item 1"
              description="This is the description for News Item 1."
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="News Item 2"
              description="This is the description for News Item 2."
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="News Item 3"
              description="This is the description for News Item 3."
            />
          </div>
        </div>
      </div>
    );
  }
}
