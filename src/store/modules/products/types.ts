/*
 * DATA TYPES
 */
export interface TechItem {
  titulo: string;
  descricao: string;
}

export interface Product {
  id: number;
  nome: string;
  imagem: string;
  decricaoCurta: string;
  descricaoLonga: string;
  exclusivo: boolean;
  promocao: boolean;
  favorito: boolean;
  fichaTecnica: TechItem[];
  valor: number;
}

/*
 * STATE TYPES
 */
export interface ProductsState {
  readonly all: Product[];
  readonly exclusives: Product[];
  readonly promotion: Product[];
  readonly favorites: Product[];
}

/*
 * ACTIONS TYPES
 */
export const STORE_PRODUCTS = '@xpto/STORE_PRODUCTS';
export const FAVORITE_PRODUCT = '@xpto/FAVORITE_PRODUCT';

/*
 * ACTIONS
 */
export interface StoreProductsAction {
  type: typeof STORE_PRODUCTS;
  payload: Product[];
}

export interface FavoriteProductAction {
  type: typeof FAVORITE_PRODUCT;
  payload: Product;
}

export type ProductsActionTypes = StoreProductsAction | FavoriteProductAction;
