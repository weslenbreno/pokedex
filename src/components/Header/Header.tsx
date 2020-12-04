import LogoHeader from 'components/LogoHeader/LogoHeader';
import React from 'react';
import { Link } from 'react-router-dom';
import { FavoriteLink, HeaderContainer, Menu, PikachuIcon } from './styles';

type Props = {
  bgColor?: string;
  logoColor?: string;
  height?: string;
  title?: any;
  children?: React.ReactNode;
};

const Header: React.FC<Props> = ({ bgColor, logoColor, height, children, title }) => {
  return (
    <HeaderContainer bgColor={bgColor || ''} height={height}>
      <Menu>
        <LogoHeader color={logoColor} />
        {title}
        <FavoriteLink color={logoColor}>
          <Link to="/favorites">Meus favoritos</Link>
          <PikachuIcon />
        </FavoriteLink>
      </Menu>
      {children}
    </HeaderContainer>
  );
};

export default React.memo(Header);
