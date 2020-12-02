import React from 'react';
import styled from 'styled-components';
import pokeball from 'assets/images/pokeball.svg';

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 15px;
  h1 {
    margin-left: 8px;
    font-family: 'SF Pro Black';
    font-size: 22px;
  }
`;

const LogoHeader = () => {
  return (
    <Logo>
      <img src={pokeball} alt="pokeball" height={35} />
      <h1>Pockédex</h1>
    </Logo>
  );
};

export default LogoHeader;
