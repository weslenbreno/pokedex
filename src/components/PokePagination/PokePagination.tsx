import React from 'react';
import './styles.scss';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import NextImg from 'assets/images/next-arrow.png';
import PrevImg from 'assets/images/prev-arrow.png';

type Props = {
  count: number | null;
  onPageChange?: (event: any) => void;
  forcePage?: number;
  initialPage?: number;
};

const Arrow = styled.img`
  height: 20px;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none !important;
  }
`;

const PokePagination: React.FC<Props> = ({ count, onPageChange, forcePage, initialPage }) => {
  return (
    <ReactPaginate
      previousLabel={<Arrow src={PrevImg} height={25} />}
      nextLabel={<Arrow src={NextImg} height={25} />}
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

export default PokePagination;
