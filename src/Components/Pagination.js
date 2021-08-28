import React, { Component } from "react";

export class Pagination extends Component {
  render() {
    let { page, pages, handlePage, firstPage, lastPage } = this.props;
    let pageArr = [];
    if (page === 1) pageArr = [1, 2, 3];
    else if (page === pages) pageArr = [page - 2, page - 1, page];
    else pageArr = [page - 1, page, page + 1];

    return (
      <div className="container my-3 d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
              <button onClick={firstPage} className="page-link">
                &lt;&lt;
              </button>
            </li>
            {pageArr.map(
              (i) =>
                i > 0 &&
                i <= pages && (
                  <li
                    className={`page-item ${page === i ? "active" : ""}`}
                    key={i}
                  >
                    <button className="page-link" onClick={() => handlePage(i)}>
                      {i}
                    </button>
                  </li>
                )
            )}
            <li className={`page-item ${pages <= page ? "disabled" : ""}`}>
              <button onClick={lastPage} className="page-link">
                &gt;&gt;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
