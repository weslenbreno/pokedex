import React from 'react';
import { ThemeColors } from 'shared/constants/Colors';
import styled from 'styled-components';
import { ReactComponent as SVGIcon } from 'assets/images/search.svg';

const SearchIcon = styled(SVGIcon)`
  fill: #fff;
  height: 20px;
  margin-right: 5px;
  position: absolute;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
`;
const Input = styled.input`
  min-width: 300px;
  border: none;
  background: transparent;
  color: ${ThemeColors.white};
  padding: 10px 0px;
  border-bottom: 1px solid #fff;
  padding-left: 35px;
  color: ${ThemeColors.white};
  font-family: 'SF Pro SemiBold';
  font-size: 18px;
  outline: none;
  ::placeholder {
    color: ${ThemeColors.white};
    font-family: 'SF Pro SemiBold';
    font-size: 18px;
  }

  &:focus {
    border-color: ${ThemeColors.darkGrey};
    transition: border-color 1s;
  }
`;

type Props = {
  placeholder: string;
};

const SearchBar: React.FC<Props> = ({ placeholder }) => {
  return (
    <InputContainer>
      <SearchIcon />
      <Input type="text" placeholder={placeholder} />
    </InputContainer>
  );
};

export default SearchBar;
