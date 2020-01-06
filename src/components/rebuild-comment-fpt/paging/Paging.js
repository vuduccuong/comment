import React, { Fragment } from "react";

const Paging = props => {
  console.log("paging: ", props);
  //click vào trang
  const clickPaging = e => {
    e.preventDefault();
    //remove active
    document
      .querySelectorAll(".comment-pagination a.active")
      .forEach(eActive => {
        eActive.classList.remove("active");
      });

    e.currentTarget.childNodes[0].classList.add("active");
    const page = e.currentTarget.innerText;
    props.changePage(page);
  };

  return (
    <Fragment>
      <div className="comment-pagination margin-bottom-20">
        <ul className="pagination text-center">
          <li
            className="pagination-item"
            onClick={e => {
              clickPaging(e);
            }}
          >
            <a
              style={{ cursor: "pointer" }}
              className="pagination-link active"
              href={null}
            >
              1
            </a>
          </li>
          <li
            className="pagination-item"
            onClick={e => {
              clickPaging(e);
            }}
          >
            <a
              style={{ cursor: "pointer" }}
              className="pagination-link "
              href={null}
            >
              2
            </a>
          </li>
          <li
            className="pagination-item"
            onClick={e => {
              clickPaging(e);
            }}
          >
            <a
              style={{ cursor: "pointer" }}
              className="pagination-link"
              href={null}
            >
              3
            </a>
          </li>
          <li
            className="pagination-item"
            onClick={e => {
              clickPaging(e);
            }}
          >
            <a
              style={{ cursor: "pointer" }}
              className="pagination-link"
              href={null}
            >
              4
            </a>
          </li>
          <li
            className="pagination-item"
            onClick={e => {
              clickPaging(e);
            }}
          >
            <a
              style={{ cursor: "pointer" }}
              className="pagination-link"
              href={null}
            >
              5
            </a>
          </li>
          <li className="pagination-item">
            <a
              style={{ cursor: "pointer" }}
              className="pagination-link"
              href={null}
              aria-label="Next"
            >
              <i
                className="demo-icon icon-right-open-big"
                onClick={e => {
                  clickPaging(e);
                }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Paging;
