import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { item } = this.props;

    return (
      <div className="card" style={{ width: "18rem", height: "28rem" }}>
        <div className="card-header">
          {item.source.name ? item.source.name : "Unknown"}
        </div>
        <img
          src={
            item.urlToImage
              ? item.urlToImage
              : "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm90JTIwZm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          style={{ height: "150px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {item.title ? item.title.slice(0, 40) + "..." : "No Title"}
          </h5>
          <p className="card-text">
            {item.description
              ? item.description.slice(0, 80) + "..."
              : "No Description"}
          </p>
          <a
            href={item.url ? item.url : "/"}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
        <div className="card-footer text-muted">
          {new Date(item.publishedAt).toLocaleString()}
        </div>
      </div>
    );
  }
}

export default NewsItem;
