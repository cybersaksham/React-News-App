import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title } = this.props;

    return <div>{title}</div>;
  }
}

export default NewsItem;
