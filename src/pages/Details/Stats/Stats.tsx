import React from 'react';
import { ThemeColors, TypesColors } from 'shared/constants/Colors';
import StatsChart from './components/StatsChart';
import { Container, ChartContainer, Content, SectionHeader, Title, TypesBadge } from './styles';

type StatsProps = {
  data?: any;
};

const Stats: React.FC<StatsProps> = ({ data }) => {
  const mapStats = (stats: any[] = []) => {
    return stats.map((st) => st.base_stat);
  };

  return (
    <Container>
      <SectionHeader>
        <Title># Stats</Title>
        {data?.types.map(({ type }) => (
          <TypesBadge color={TypesColors[type.name] || ThemeColors.darkGrey} key={type.name}>
            {type.name}
          </TypesBadge>
        ))}
      </SectionHeader>
      <Content>
        <ChartContainer>
          <StatsChart
            pokemonName={data?.name}
            data={[
              {
                data: mapStats(data?.stats),
              },
            ]}
          />
        </ChartContainer>
      </Content>
    </Container>
  );
};

export default Stats;
