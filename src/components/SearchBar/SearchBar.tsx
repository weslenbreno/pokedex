import React from 'react';
import debounce from 'lodash/debounce';
import { Container, InputContainer, SearchIcon, Input } from './styles';

type Props = {
  placeholder: string;
  onSearch?: any;
};

const SearchBar: React.FC<Props> = ({ placeholder, onSearch }) => {
  return (
    <Container>
      <InputContainer>
        <SearchIcon />
        <Input type="text" placeholder={placeholder} onChange={debounce(onSearch, 500)} />
      </InputContainer>
    </Container>
  );
};

export default React.memo(SearchBar);
