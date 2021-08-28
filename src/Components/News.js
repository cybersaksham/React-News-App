import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

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
  };

  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  getData = async (page__) => {
    this.setState({ loading: true });
    let url__ = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=faffda3ddbcf4441a8c78ca4774e777d&pageSize=${this.props.pageSize}&page=${page__}`;
    let data__ = await fetch(url__);
    let parsedData__ = await data__.json();
    this.setState({
      articles: parsedData__.articles ? parsedData__.articles : [],
      pages: Math.ceil(parsedData__.totalResults / this.props.pageSize),
      page: page__,
      loading: false,
    });
  };

  componentDidMount = () => this.getData(1);

  handleFirstBtn = () => this.getData(1);
  handleLastBtn = () => this.getData(this.state.pages);
  handlePage = (page__) => this.getData(page__);

  render() {
    return !this.state.loading ? (
      <>
        <Pagination
          page={this.state.page}
          pages={this.state.pages}
          handlePage={this.handlePage}
          firstPage={this.handleFirstBtn}
          lastPage={this.handleLastBtn}
        />
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
          next={() => {}}
          hasMore={true}
          loader={<Spinner />}
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
        <Pagination
          page={this.state.page}
          pages={this.state.pages}
          handlePage={this.handlePage}
          firstPage={this.handleFirstBtn}
          lastPage={this.handleLastBtn}
        />
      </>
    ) : (
      <Spinner />
    );
  }
}

export default News;
