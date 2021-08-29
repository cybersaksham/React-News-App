import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { item } = this.props;

    return (
      <div className="card" style={{ width: "18rem", height: "30rem" }}>
        <div className="card-header">
          {item.source.name ? item.source.name : "Unknown"}
        </div>
        <img
          src={
            item.urlToImage
              ? item.urlToImage
              : "data:image/jpeg;base64,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"
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
          <p className="card-text my-2 d-flex justify-content-end">
            <small className="text-muted">
              - {item.author ? item.author : "Unknown"}
            </small>
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
