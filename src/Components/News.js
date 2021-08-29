import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import ScrollSpinner from "./ScrollSpinner";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 10,
  };

  static propTypes = {
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    api: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      loading: true,
      articles: [],
    };
  }

  getData = async (page__) => {
    this.props.progress(10);
    this.setState({ loading: true });
    let url__ = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&pageSize=${this.props.pageSize}&page=${page__}`;
    let data__ = await fetch(url__);
    this.props.progress(30);
    let parsedData__ = await data__.json();
    this.props.progress(60);
    this.setState({
      articles: parsedData__.articles ? parsedData__.articles : [],
      pages: Math.ceil(parsedData__.totalResults / this.props.pageSize),
      page: page__,
      totalResults: parsedData__.totalResults,
      loading: false,
    });
    this.props.progress(100);
  };

  componentDidMount = () => this.getData(1);

  handleFirstBtn = () => this.getData(1);
  handleLastBtn = () => this.getData(this.state.pages);
  handlePage = (page__) => this.getData(page__);

  handleScroll = async () => {
    this.setState({ page: this.state.page + 1 });
    let url__ = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data__ = await fetch(url__);
    let parsedData__ = await data__.json();
    this.setState({
      articles: this.state.articles.concat(parsedData__.articles),
      pages: Math.ceil(parsedData__.totalResults / this.props.pageSize),
      totalResults: parsedData__.totalResults,
      loading: false,
    });
  };

  render() {
    return !this.state.loading ? (
      <>
        <div className="container my-3">
          <h2>
            {this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}{" "}
            News
          </h2>
          <hr />
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.handleScroll}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<ScrollSpinner />}
          scrollThreshold={1.0}
        >
          <div className="container my-3">
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
        </InfiniteScroll>
      </>
    ) : (
      <Spinner />
    );
  }
}

export default News;
