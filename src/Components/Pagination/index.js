/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import clsx from "clsx";
import { usePagination, DOTS } from "./usePagination";

function Pagination(props) {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  let lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    if (currentPage !== lastPage) onPageChange(currentPage + 1);
  };
  const onLast = () => {
    if (currentPage !== lastPage) onPageChange(lastPage);
  };
  const onFirst = () => {
    if (currentPage !== 1) onPageChange(1);
  };

  const onPrevious = () => {
    if (currentPage !== 1) onPageChange(currentPage - 1);
  };

  return (
    <div className="cpagination">
      <ul className="float-right">
        <li onClick={onFirst}>
          <a className={clsx("firstpage", {  "disabled": currentPage === 1 })}>
            First
          </a>
        </li>
        <li onClick={onPrevious}>
          <a
            className={clsx("prevpage", {  "disabled": currentPage === 1 })}
          ></a>
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li className="pagination-item dots">
                <a>....</a>
              </li>
            );
          }
          return (
            <li onClick={() => onPageChange(pageNumber)}>
              <a className={clsx({'active':currentPage === pageNumber})}>{pageNumber}</a>
            </li>
          );
        })}
        <li onClick={onNext}>
          <a
            className={clsx("nextpage", {
              "disabled": currentPage === lastPage,
            })}
          ></a>
        </li>
        <li onClick={onLast}>
          <a
            className={clsx("lastpage", {
                "disabled": currentPage === lastPage,
            })}
          >
            Last
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
