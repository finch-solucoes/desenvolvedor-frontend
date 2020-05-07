import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';
import { CardGrid } from '../../components/Card/styles';
import Header from '../../components/Header';
import { ApplicationState } from '../../store';
import { Product } from '../../store/modules/products/types';
import { Container } from './styles';

const Home: React.FC = () => {
  const { all, searchTerm } = useSelector(
    (state: ApplicationState) => state.products,
  );

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let filteredProducts;

    if (searchTerm) {
      filteredProducts = all.filter(product =>
        new RegExp(searchTerm, 'i').test(product.nome),
      );
    }

    setProducts(filteredProducts ?? all);
  }, [searchTerm, all]);

  return (
    <>
      <Header
        title="Conheça todos os nossos produtos"
        subTitle="Listagem de produtos - clique no produto desejado para saber mais"
      />
      <Container>
        <CardGrid>
          {products.map(product => (
            <Card key={String(product.id)} product={product} />
          ))}
        </CardGrid>
        {products.length <= 0 && !!searchTerm ? (
          <h1>Nenhum produto encontrado =(</h1>
        ) : null}
      </Container>
    </>
  );
};

export default Home;
