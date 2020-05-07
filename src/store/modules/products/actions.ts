import {
  ProductsActionTypes,
  Product,
  STORE_PRODUCTS,
  FAVORITE_PRODUCT,
  FILTER_PRODUCTS,
} from './types';

/*
 * STORE_PRODUCTS
 */
export function storeProducts(payload: Product[]): ProductsActionTypes {
  return {
    type: STORE_PRODUCTS,
    payload,
  };
}

/*
 * FAVORITE_PRODUCT
 */
export function toggleFavoriteProduct(payload: Product): ProductsActionTypes {
  return {
    type: FAVORITE_PRODUCT,
    payload,
  };
}

/*
 * FILTER_PRODUCTS
 */
interface FilterProductsPayload {
  search: string;
}

export function filterProducts(
  payload: FilterProductsPayload,
): ProductsActionTypes {
  return {
    type: FILTER_PRODUCTS,
    payload,
  };
}
