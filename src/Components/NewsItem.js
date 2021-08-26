import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { item } = this.props;

    return (
      <div className="card" style={{ width: "18rem" }}>
        <div class="card-header">
          {item.source.name ? item.source.name : "Unknown"}
        </div>
        <img
          src={
            item.urlToImage
              ? item.urlToImage
              : "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm90JTIwZm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.title ? item.title : "No Title"}</h5>
          <p className="card-text">
            {item.description ? item.description : "No Description"}
          </p>
          <a
            href={item.url ? item.url : "/"}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
        <div class="card-footer text-muted">{item.publishedAt}</div>
      </div>
    );
  }
}

export default NewsItem;
