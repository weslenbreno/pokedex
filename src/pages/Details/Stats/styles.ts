import { ThemeColors } from 'shared/constants/Colors';
import styled from 'styled-components';

export const Container = styled.h3`
  padding: 50px 25px 0px 25px;
  width: 100%;
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0px 10%;

  @media (max-width: 750px) {
    padding: 0px 15px;
  }
`;

export const Content = styled.div`
  padding: 50px 25px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 28px;
  font-family: 'VisbyCF DemiBold';
  color: ${ThemeColors.darkGrey};
  margin: 0;
  margin-right: 25px;
`;
export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;


type BadgeProps = {
    color?: string;
};

export const TypesBadge = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.color || ThemeColors.darkGrey};
  border-radius: 25px;
  color: ${ThemeColors.white};
  padding: 3px 25px;
  font-size: 14px;
  font-family: 'VisbyCF DemiBold';
  margin: 0px 8px;
`;