import LogoHeader from 'components/LogoHeader/LogoHeader';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { ThemeColors } from 'shared/constants/Colors';
import styled from 'styled-components';
import { ReactComponent as SVGIcon } from 'assets/images/avatar.svg';

const HeaderContainer = styled.div`
  height: 40%;
  background-color: ${(props: any) => props?.bgColor || ThemeColors.yellow};
  display: flex;
  justify-content: center;
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

const FavoriteLink = styled.div`
  display: flex;
  align-items: center;

  a {
    font-family: 'SF Pro Bold';
    font-size: 14px;
    text-decoration: none;
  }
`;

const PikachuIcon = styled(SVGIcon)`
  height: 32px;
  width: 32px;
  margin-left: 8px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Menu>
        <LogoHeader />
        <FavoriteLink>
          <a href="/">Meus favoritos</a>
          <PikachuIcon />
        </FavoriteLink>
      </Menu>
      <SearchBar placeholder="Procurar pokémon pelo nome..." />
    </HeaderContainer>
  );
};

export default Header;
