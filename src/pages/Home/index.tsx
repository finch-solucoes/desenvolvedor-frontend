import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';
import { CardGrid } from '../../components/Card/styles';
import Header from '../../components/Header';
import { ApplicationState } from '../../store';
import { Container } from './styles';

const Home: React.FC = () => {
  const products = useSelector((state: ApplicationState) => state.products);

  console.log(products);

  return (
    <>
      <Header />
      <Container>
        <CardGrid>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardGrid>
      </Container>
    </>
  );
};

export default Home;
