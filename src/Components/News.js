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
  handlePage = (page__) => this.getData(page__);

  render() {
    return (
      !this.state.loading && (
        <>
          <Pagination
            page={this.state.page}
            pages={this.state.pages}
            handlePage={this.handlePage}
            prevPage={this.handlePrevBtn}
            nextPage={this.handleNextBtn}
          />
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
          <Pagination
            page={this.state.page}
            pages={this.state.pages}
            handlePage={this.handlePage}
            prevPage={this.handlePrevBtn}
            nextPage={this.handleNextBtn}
          />
        </>
      )
    );
  }
}

export default News;
