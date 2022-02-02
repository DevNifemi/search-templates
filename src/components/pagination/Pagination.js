import React from 'react';
import './pagination.styles.css';
import { usePagination, DOTS } from '../../hooks/usePagination';

const Pagination = props => {

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
    pageSize
  });

  // If there are less than 2 times in pagination range do not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return [];
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className='pagination-container' >
       {/* Left navigation arrow */}
      <li className={`prev ${currentPage === 1 ? 'disabled' : ''}`} onClick={onPrevious}>
         Previous
      </li>
        
        <div className='page-number'>
        {paginationRange.map((pageNumber, idx) => { 
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
            return <li key={idx} className="pagination-item dots">&#8230;</li>;
            }

            // Render our Page Pills
            return (
            <li key={idx} className={`pagination-item ${currentPage === pageNumber ? 'selected' : ''}`} onClick={() => onPageChange(pageNumber)}>
                {pageNumber}
            </li>
            );
        })}
        </div>

      {/*  Right Navigation arrow */}
      <li className={`next ${currentPage === lastPage ? 'disabled' : ''} `} onClick={onNext}>
        Next 
      </li>

    </ul>
  );
};

export default Pagination;