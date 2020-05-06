import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';
import { CardGrid } from '../../components/Card/styles';
import Header from '../../components/Header';
import { ApplicationState } from '../../store';
import { Container } from './styles';

const Favorites: React.FC = () => {
  const products = useSelector(
    (state: ApplicationState) => state.products.favorites,
  );

  return (
    <>
      <Header
        title="Meus favoritos"
        subTitle="Listagem de produtos marcados como favoritos - clique no produto desejado para saber mais"
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

export default Favorites;
