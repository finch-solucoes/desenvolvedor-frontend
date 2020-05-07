import produce from 'immer';

import {
  ProductsState,
  STORE_PRODUCTS,
  ProductsActionTypes,
  FAVORITE_PRODUCT,
  FILTER_PRODUCTS,
} from './types';

const INITIAL_STATE: ProductsState = {
  all: [],
  searchTerm: '',
};

export default function products(
  state = INITIAL_STATE,
  action: ProductsActionTypes,
): ProductsState {
  return produce(state, draft => {
    switch (action.type) {
      case STORE_PRODUCTS: {
        draft.all = action.payload;
        break;
      }

      case FAVORITE_PRODUCT: {
        const favoritedProduct = action.payload;

        draft.all = draft.all.map(product =>
          product.id === favoritedProduct.id
            ? { ...product, favorito: !product.favorito }
            : product,
        );
        break;
      }

      case FILTER_PRODUCTS: {
        const { search } = action.payload;

        draft.searchTerm = search;
        break;
      }

      default:
    }
  });
}
