import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { item } = this.props;

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={item.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <a href={item.url} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
