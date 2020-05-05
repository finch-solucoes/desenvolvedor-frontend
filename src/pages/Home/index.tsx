import React from 'react';

import Card from '../../components/Card';
import { CardGrid } from '../../components/Card/styles';
import Header from '../../components/Header';
import { Container } from './styles';

const Home: React.FC = () => {
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
