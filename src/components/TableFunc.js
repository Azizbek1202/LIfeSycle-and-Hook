import React, { useState, useEffect, Fragment } from "react";
import usePagination from "./Pagination";
import './style.css'

const TableFunc = () => {
  const [item, setItem] = useState();
  const [searchName, setSearchName] = useState();
  const [searchBody, setSearchBody] = useState();
  const [filterValueName, setFilterValueName] = useState();
  const [filterValueBody, setFilterValueBody] = useState();
  let itemsPerPage = 10;
  let startFrom = 1;
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((json) => {
          setItem(json);
          setSearchName(json);
          setSearchBody(json);
        });
    };
    fetchData();
  }, []);
  const { sliceditem, pagination, prevPage, nextPage, changePage } =
    usePagination({ itemsPerPage, item, startFrom });
  const handleFilterName = (e) => {
    setFilterValueName(e.target.value);
    if (e.target.value == "") {
      setItem(setSearchName);
    } else {
      const filterResult = searchName.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setItem(filterResult);
    }
  };
  const handleFilterBody = (e) => {
    setFilterValueBody(e.target.value);
    if (e.target.value == "") {
      setItem(setSearchBody);
    } else {
      const filterResult = searchBody.filter((item) =>
        item.body.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setItem(filterResult);
    }
  };

  return (
    <div className="container">
      Name{" "}
      <input className="mx-5 my-3" value={filterValueName} onChange={(e) => handleFilterName(e)} />
      Body{" "}
      <input className="mx-5 my-3" value={filterValueBody} onChange={(e) => handleFilterBody(e)} />
      <Fragment>
        <table className="table table-striped">
          <thead>
            <th>T/r</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </thead>
          <tbody>
            {sliceditem()?.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id
                }</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav className="pagination justify-content-end">
          <a href="/#" className="pagination-previous" onClick={prevPage}>
            Previous
          </a>
          
          <div className="pagination-list">
            {pagination?.map((page) => {
              if (!page.ellipsis) {
                return (
                  <li key={page.id}>
                    <a
                      href="/#"
                      className={
                        page.current
                          ? "pagination-link is-current"
                          : "pagination-link"
                      }
                      onClick={(e) => changePage(page.id, e)}
                    >
                      {page.id}
                    </a>
                  </li>
                );
              } else {
                return (
                  <li key={page.id}>
                    <span className="pagination-ellipsis">&hellip;</span>
                  </li>
                );
              }
            })}
          </div>
          <a href="/#" className="pagination-next" onClick={nextPage}>
            Next
          </a>
        </nav>
      </Fragment>
    </div>
  );
};
export default TableFunc;