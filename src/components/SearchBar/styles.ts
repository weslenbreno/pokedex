import styled from 'styled-components';
import { ReactComponent as SVGIcon } from 'assets/images/search.svg';
import { ThemeColors } from 'shared/constants/Colors';

export const SearchIcon = styled(SVGIcon)`
  fill: #fff;
  height: 20px;
  width: 20px;
  margin-right: 5px;
  position: absolute;
  left: 0;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  min-width: 270px;
`;
export const Input = styled.input`
  min-width: 250px;
  width: 100%;
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
