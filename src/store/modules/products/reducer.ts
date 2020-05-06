import produce from 'immer';

import {
  ProductsState,
  STORE_PRODUCTS,
  ProductsActionTypes,
  FAVORITE_PRODUCT,
} from './types';

const INITIAL_STATE: ProductsState = {
  all: [],
  exclusives: [],
  promotion: [],
  favorites: [],
};

export default function products(
  state = INITIAL_STATE,
  action: ProductsActionTypes,
): ProductsState {
  return produce(state, draft => {
    switch (action.type) {
      case STORE_PRODUCTS: {
        draft.all = action.payload;
        draft.exclusives = action.payload.filter(product => product.exclusivo);
        draft.promotion = action.payload.filter(product => product.promocao);
        break;
      }

      case FAVORITE_PRODUCT: {
        const favoritedProduct = action.payload;

        // update all products
        draft.all = draft.all.map(product =>
          product.id === favoritedProduct.id
            ? { ...product, favorito: !product.favorito }
            : product,
        );

        // update exclusives
        draft.exclusives = draft.all.filter(product => product.exclusivo);

        // update promotions
        draft.promotion = draft.all.filter(product => product.promocao);

        // update favorites
        draft.favorites = draft.all.filter(product => product.favorito);
        break;
      }
      default:
    }
  });
}
