import React from 'react';
import styled from 'styled-components';
import pokeball from 'assets/images/pokeball.svg';
import { Link } from 'react-router-dom';
import { ThemeColors } from 'shared/constants/Colors';

type StyledProps = {
  color?: string;
};

const Logo = styled(Link)<StyledProps>`
  text-decoration: none;
  color: ${(props) => props.color || ThemeColors.black};
  display: flex;
  align-items: center;
  margin: 0px 15px;
  h1 {
    margin-left: 8px;
    font-family: 'SF Pro Black';
    font-size: 22px;
  }
`;

type Props = {
  color?: string | null | undefined;
};

const LogoHeader: React.FC<Props> = ({ color }) => {
  return (
    <Logo to="/" color={color}>
      <img src={pokeball} alt="pokeball" height={35} />
      <h1>Pokédex</h1>
    </Logo>
  );
};

export default React.memo(LogoHeader);
