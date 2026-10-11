import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

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
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=bb18e49d2a9f476dbb129b2c421fbb7b&pagesize=${this.props.pageSize}&page=1`;
    this.setState({ loading: true }); // Set loading to true before fetching data
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false, // Set loading to false after data is fetched
    });
  }

  handleNextClick = async () => {
    const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);

    // Stop if already on the last page
    if (this.state.page >= totalPages) {
      return;
    }

    const nextPage = this.state.page + 1;

    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=bb18e49d2a9f476dbb129b2c421fbb7b&pagesize=${this.props.pageSize}&page=${nextPage}`;
    this.setState({ loading: true }); // Set loading to true before fetching data

    const response = await fetch(url);
    const parsedData = await response.json();

    this.setState({
      articles: parsedData.articles,
      page: nextPage,
      loading: false,
    });
  };

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=bb18e49d2a9f476dbb129b2c421fbb7b&pagesize=${this.props.pageSize}&page=${
        this.state.page - 1
      }`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h3 className="text-center">NewsApp - Top Headlines</h3>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((article) => (
                <div className="col-md-4" key={article.url}>
                  <NewsItem
                    title={article.title ? article.title.slice(0, 30) : ""}
                    description={
                      article.description
                        ? article.description.slice(0, 30)
                        : ""
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
                this.state.page >=
                Math.ceil(this.state.totalResults / this.props.pageSize)
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
