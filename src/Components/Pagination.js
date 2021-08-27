import React, { Component } from "react";

export class Pagination extends Component {
  render() {
    let { page, pages, handlePage, firstPage, lastPage } = this.props;

    return (
      <div className="container my-3 d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
              <button onClick={firstPage} className="page-link">
                &lt;&lt;
              </button>
            </li>
            {Array.from({ length: pages }, (_, index) => index + 1).map((i) => (
              <li className={`page-item ${page === i ? "active" : ""}`} key={i}>
                <button className="page-link" onClick={() => handlePage(i)}>
                  {i}
                </button>
              </li>
            ))}
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
