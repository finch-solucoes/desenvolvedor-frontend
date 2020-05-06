import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';
import { CardGrid } from '../../components/Card/styles';
import Header from '../../components/Header';
import { ApplicationState } from '../../store';
import { Container } from './styles';

const Promotion: React.FC = () => {
  const products = useSelector(
    (state: ApplicationState) => state.products.promotion,
  );

  return (
    <>
      <Header
        title="Conheça nossas promoções"
        subTitle="Listagem de produtos em promoção - clique no produto desejado para saber mais"
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

export default Promotion;
