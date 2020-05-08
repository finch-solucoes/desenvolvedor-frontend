import React, { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';

import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import Routes from './routes';
import { storeProducts } from './store/modules/products/actions';
import { Product } from './store/modules/products/types';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const {
        data: { produtos },
      } = await axios.get('http://www.mocky.io/v2/5d3b57023000005500a2a0a6');

      // set favorite default value
      const products = produtos.map((produto: Product) => ({
        ...produto,
        favorito: false,
      }));

      // store products in Redux
      dispatch(storeProducts(products));
    }

    loadProducts();
  });

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
