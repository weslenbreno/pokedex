import React from 'react';
import styled from 'styled-components';
import pokeball from 'assets/images/pokeball.svg';
import { Link } from 'react-router-dom';
import { ThemeColors } from 'shared/constants/Colors';

type StyledProps = {
  fontColor?: string;
};

const Logo = styled(Link)<StyledProps>`
  text-decoration: none;
  color: ${(props) => props.fontColor || ThemeColors.black};
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
  fontColor?: string | null | undefined;
};

const LogoHeader: React.FC<Props> = ({ fontColor }) => {
  return (
    <Logo to="/" fontColor={fontColor}>
      <img src={pokeball} alt="pokeball" height={35} />
      <h1>Pokédex</h1>
    </Logo>
  );
};

export default LogoHeader;
