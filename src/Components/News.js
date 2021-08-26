import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };
  }

  async componentDidMount() {
    let url__ =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=faffda3ddbcf4441a8c78ca4774e777d";
    let data__ = await fetch(url__);
    let parsedData__ = await data__.json();
    this.setState({ articles: parsedData__.articles, loading: false });
  }

  render() {
    return (
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
    );
  }
}

export default News;
