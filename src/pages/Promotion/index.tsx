import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';
import { CardGrid } from '../../components/Card/styles';
import Header from '../../components/Header';
import { ApplicationState } from '../../store';
import { Product } from '../../store/modules/products/types';
import { Container } from './styles';

const Promotion: React.FC = () => {
  const { all, searchTerm } = useSelector(
    (state: ApplicationState) => state.products,
  );

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let filteredProducts;

    if (searchTerm) {
      filteredProducts = all.filter(
        product =>
          new RegExp(searchTerm, 'i').test(product.nome) && product.promocao,
      );
    } else {
      filteredProducts = all.filter(product => product.promocao);
    }

    setProducts(filteredProducts);
  }, [searchTerm, all]);
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
        {products.length <= 0 && !!searchTerm ? (
          <h1>Nenhum produto encontrado =(</h1>
        ) : null}
      </Container>
    </>
  );
};

export default Promotion;
