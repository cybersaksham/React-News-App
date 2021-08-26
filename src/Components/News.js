import React, { Component } from "react";
import NewsItem from "./NewsItem";

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
    this.setState({ articles: parsedData__.articles, loading: false });
  };

  async componentDidMount() {
    this.getData(1);
  }

  render() {
    return (
      !this.state.loading && (
        <div className="container my-3">
          <h2>Latest News</h2>
          <hr />
          <div className="row">
            {this.state.articles.map((item) => {
              return (
                <div key={item.url} className="col-md-4 my-3">
                  <NewsItem item={item} />
                </div>
              );
            })}
          </div>
        </div>
      )
    );
  }
}

export default News;
