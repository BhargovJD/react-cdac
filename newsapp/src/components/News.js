import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        News
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    );
  }
}
