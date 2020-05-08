import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';
import { CardGrid } from '../../components/Card/styles';
import Header from '../../components/Header';
import { ApplicationState } from '../../store';
import { Product } from '../../store/modules/products/types';
import { Container } from './styles';

const Exclusives: React.FC = () => {
  const { t } = useTranslation();

  const { all, searchTerm } = useSelector(
    (state: ApplicationState) => state.products,
  );

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let filteredProducts;

    if (searchTerm) {
      filteredProducts = all.filter(
        product =>
          new RegExp(searchTerm, 'i').test(product.nome) && product.exclusivo,
      );
    } else {
      filteredProducts = all.filter(product => product.exclusivo);
    }

    setProducts(filteredProducts);
  }, [searchTerm, all]);

  return (
    <>
      <Header
        title={t('EXCLUSIVES.TITLE')}
        subTitle={t('EXCLUSIVES.SUBTITLE')}
      />
      <Container>
        <CardGrid>
          {products.map(product => (
            <Card key={String(product.id)} product={product} />
          ))}
        </CardGrid>
        {products.length <= 0 && !!searchTerm ? (
          <h1>{t('SEARCH.NOT_FOUND')}</h1>
        ) : null}
      </Container>
    </>
  );
};

export default Exclusives;
