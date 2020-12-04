import { ThemeColors } from 'shared/constants/Colors';
import styled from 'styled-components';
import { ReactComponent as SVGIcon } from 'assets/images/avatar.svg';

type HeaderProps = {
  readonly bgColor?: string;
  readonly height?: string;
};

export const HeaderContainer = styled.div<HeaderProps>`
  height: ${(props) => props?.height || '50%'};
  background-color: ${(props: any) => props?.bgColor || ThemeColors.yellow};
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
`;

export const Menu = styled.div`
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

export const FavoriteLink = styled.div<LinkProps>`
  display: flex;
  align-items: center;
  a {
    font-family: 'SF Pro Bold';
    font-size: 14px;
    text-decoration: none;
    color: ${(props) => props?.color || ThemeColors.darkGrey};

    &:visited,
    &:active {
      color: ${(props) => props?.color || ThemeColors.darkGrey};
    }

    &:hover {
      color: ${(props) => (props?.color ? ThemeColors.darkGrey : ThemeColors.white)};
    }
  }
`;

export const PikachuIcon = styled(SVGIcon)`
  height: 32px;
  width: 32px;
  margin-left: 8px;
`;
