import React, { Component } from "react";

export class Pagination extends Component {
  render() {
    let { page, pages } = this.props;

    return (
      <div className="container my-3 d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link">Prev</button>
            </li>
            {Array.from({ length: pages }, (_, index) => index + 1).map((i) => (
              <li className="page-item">
                <button className="page-link" href="#">
                  {i}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button className="page-link" href="#">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
