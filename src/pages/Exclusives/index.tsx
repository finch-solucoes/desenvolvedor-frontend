import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';
import { CardGrid } from '../../components/Card/styles';
import Header from '../../components/Header';
import { ApplicationState } from '../../store';
import { Container } from './styles';

const Exclusives: React.FC = () => {
  const products = useSelector(
    (state: ApplicationState) => state.products.exclusives,
  );

  return (
    <>
      <Header
        title="Conheça nossos produtos exclusivos"
        subTitle="Listagem de produtos exclusivos - clique no produto desejado para saber mais"
      />
      <Container>
        <CardGrid>
          {products.map(product => (
            <Card key={String(product.id)} product={product} />
          ))}
        </CardGrid>
      </Container>
    </>
  );
};

export default Exclusives;
