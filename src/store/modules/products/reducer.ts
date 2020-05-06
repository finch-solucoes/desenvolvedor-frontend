import produce from 'immer';

import { ProductsState, STORE_PRODUCTS, ProductsActionTypes } from './types';

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
      default:
    }
  });
}
