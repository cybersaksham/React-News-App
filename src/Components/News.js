import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  getData = async (page__) => {
    this.setState({ loading: true });
    let url__ = `https://newsapi.org/v2/top-headlines?country=in&apiKey=faffda3ddbcf4441a8c78ca4774e777d&pageSize=15&page=${page__}`;
    let data__ = await fetch(url__);
    let parsedData__ = await data__.json();
    this.setState({
      articles: parsedData__.articles,
      pages: Math.ceil(parsedData__.totalResults / 15),
      page: page__,
      loading: false,
    });
  };

  componentDidMount = () => this.getData(1);

  handlePrevBtn = () => this.getData(this.state.page - 1);
  handleNextBtn = () => this.getData(this.state.page + 1);

  render() {
    return (
      !this.state.loading && (
        <>
          <Pagination page={this.state.page} pages={this.state.pages} />
          <div className="container my-3">
            <h2>Latest News</h2>
            <hr />
            <div className="row">
              {this.state.articles.map((item) => {
                return (
                  <div
                    key={item.url}
                    className="col-md-4 my-3  d-flex justify-content-center"
                  >
                    <NewsItem item={item} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container my-3 d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              onClick={this.handlePrevBtn}
              className="btn btn-dark"
            >
              &larr; Prev
            </button>
            <button
              disabled={this.state.pages <= this.state.page}
              onClick={this.handleNextBtn}
              className="btn btn-dark"
            >
              Next &rarr;
            </button>
          </div>
        </>
      )
    );
  }
}

export default News;
