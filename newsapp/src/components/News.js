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
      page: 1,
    };
  }

  async componentDidMount() {
    // console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=bb18e49d2a9f476dbb129b2c421fbb7b&pagesize=20&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    const totalPages = Math.ceil(this.state.totalResults / 20);

    // Stop if already on the last page
    if (this.state.page >= totalPages) {
      return;
    }

    const nextPage = this.state.page + 1;

    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=bb18e49d2a9f476dbb129b2c421fbb7b&pagesize=20&page=${nextPage}`;

    const response = await fetch(url);
    const parsedData = await response.json();

    this.setState({
      articles: parsedData.articles,
      page: nextPage,
    });
  };

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=bb18e49d2a9f476dbb129b2c421fbb7b&pagesize=20&page=${
        this.state.page - 1
      }`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
      });
    }
  };

  render() {
    return (
      <>
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
        <div className="container my-4">
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-dark"
              disabled={this.state.page <= 1}
              onClick={this.handlePrevClick}
              type="button"
            >
              Previous
            </button>

            <button
              className="btn btn-dark"
              onClick={this.handleNextClick}
              disabled={
                this.state.page >= Math.ceil(this.state.totalResults / 20)
              }
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}
