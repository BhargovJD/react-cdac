import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    // console.log("Hello I am a constructor from newsitem");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    // console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=bb18e49d2a9f476dbb129b2c421fbb7b";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h3 className="text-center">NewsApp - Top Headlines</h3>
        <div className="row">
          {this.state.articles.map((article) => (
            <div className="col-md-4" key={article.url}>
              <NewsItem
                title={article.title ? article.title.slice(0, 30) : ""}
                description={
                  article.description ? article.description.slice(0, 30) : ""
                }
                imgSrc={
                  article?.urlToImage || "https://via.placeholder.com/300"
                }
                newsUrl={article.url ?? "https://www.google.com"}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
