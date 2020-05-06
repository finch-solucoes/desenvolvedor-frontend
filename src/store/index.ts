import { Store, createStore } from 'redux';

import { Product } from './modules/products/types';
import reducers from './modules/rootReducer';

export interface ApplicationState {
  products: {
    all: Product[];
    exclusives: Product[];
    promotion: Product[];
    favorites: Product[];
  };
}

const store: Store<ApplicationState> = createStore(reducers);

export { store };
