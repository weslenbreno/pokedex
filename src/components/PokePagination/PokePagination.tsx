import React from 'react';
import './styles.scss';
import ReactPaginate from 'react-paginate';

type Props = {
  count: number | null;
  onPageChange?: (event: any) => void;
};

const PokePagination: React.FC<Props> = ({ count, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me item'}
      pageCount={count}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={onPageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
      pageClassName={'item'}
      activeLinkClassName={'item'}
    />
  );
};

export default React.memo(PokePagination);
