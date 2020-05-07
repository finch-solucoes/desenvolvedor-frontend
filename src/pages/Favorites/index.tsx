import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';
import { CardGrid } from '../../components/Card/styles';
import Header from '../../components/Header';
import { ApplicationState } from '../../store';
import { Product } from '../../store/modules/products/types';
import { Container } from './styles';

const Favorites: React.FC = () => {
  const { all, searchTerm } = useSelector(
    (state: ApplicationState) => state.products,
  );

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let filteredProducts;

    if (searchTerm) {
      filteredProducts = all.filter(
        product =>
          new RegExp(searchTerm, 'i').test(product.nome) && product.favorito,
      );
    } else {
      filteredProducts = all.filter(product => product.favorito);
    }

    setProducts(filteredProducts);
  }, [searchTerm, all]);
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
        {products.length <= 0 && !!searchTerm ? (
          <h1>Nenhum produto encontrado =(</h1>
        ) : (
          <h1>Nenhum produto adicionado aos seus favoritos</h1>
        )}
      </Container>
    </>
  );
};

export default Favorites;
