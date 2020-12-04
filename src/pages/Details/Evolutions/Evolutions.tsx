import useFetchEvolutions from 'hooks/useFetchEvolutions';
import React from 'react';
import { addFallbackImage } from 'utils/functions';
import { Container, SectionHeader, Title, Content, EvoWrap, EvoItem, PokeImg } from './styles';

type EvolutionsProps = {
  pokemon?: any;
};

const Evolutions: React.FC<EvolutionsProps> = ({ pokemon }) => {
  const { data } = useFetchEvolutions(pokemon?.id);

  return (
    <Container>
      <SectionHeader>
        <Title># Evoluções</Title>
        <Content>
          {data?.map((evo, index) => (
            <EvoWrap key={evo?.name}>
              <EvoItem>
                <PokeImg
                  onError={(event) => addFallbackImage(event, data)}
                  src={`https://pokeres.bastionbot.org/images/pokemon/${evo?.id}.png`}
                />
                <span>{evo?.name}</span>
              </EvoItem>
              {index !== data.length - 1 && <span>Evolui para</span>}
            </EvoWrap>
          ))}
        </Content>
      </SectionHeader>
      <Content></Content>
    </Container>
  );
};

export default Evolutions;
