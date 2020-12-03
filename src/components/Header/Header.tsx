import LogoHeader from 'components/LogoHeader/LogoHeader';
import React from 'react';
import { ThemeColors } from 'shared/constants/Colors';
import styled from 'styled-components';
import { ReactComponent as SVGIcon } from 'assets/images/avatar.svg';
import { Link } from 'react-router-dom';

type HeaderProps = {
  readonly bgColor: string;
};

const HeaderContainer = styled.div<HeaderProps>`
  height: 50%;
  background-color: ${(props: any) => props?.bgColor || ThemeColors.yellow};
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  padding: 25px 45px;
`;

type LinkProps = {
  readonly bgColor?: string;
};

const FavoriteLink = styled.div<LinkProps>`
  display: flex;
  align-items: center;
  a {
    font-family: 'SF Pro Bold';
    font-size: 14px;
    text-decoration: none;
    color: ${(props) => props?.color || ThemeColors.darkGrey};

    &:visited,
    &:hover,
    &:active {
      color: inherit;
    }
  }
`;

const PikachuIcon = styled(SVGIcon)`
  height: 32px;
  width: 32px;
  margin-left: 8px;
`;

type Props = {
  bgColor?: string;
  logoColor?: string;
};

const Header: React.FC<Props> = ({ bgColor, logoColor, children }) => {
  return (
    <HeaderContainer bgColor={bgColor || ''}>
      <Menu>
        <LogoHeader fontColor={logoColor} />
        <FavoriteLink color={logoColor}>
          <Link to="/favorites">Meus favoritos</Link>
          <PikachuIcon />
        </FavoriteLink>
      </Menu>
      {children}
    </HeaderContainer>
  );
};

export default Header;
