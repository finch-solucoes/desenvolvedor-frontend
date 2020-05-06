import {
  ProductsActionTypes,
  Product,
  STORE_PRODUCTS,
  FAVORITE_PRODUCT,
} from './types';

export function storeProducts(payload: Product[]): ProductsActionTypes {
  return {
    type: STORE_PRODUCTS,
    payload,
  };
}

export function toggleFavoriteProduct(payload: Product): ProductsActionTypes {
  return {
    type: FAVORITE_PRODUCT,
    payload,
  };
}
