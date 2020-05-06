import { ProductsActionTypes, Product, STORE_PRODUCTS } from './types';

export function storeProducts(payload: Product[]): ProductsActionTypes {
  return {
    type: STORE_PRODUCTS,
    payload,
  };
}
