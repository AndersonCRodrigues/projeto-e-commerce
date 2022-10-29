import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.PRODUCT_SUCCESS: {
      return {...state, products: action.payload.results,
        loarding: false,
        busca: false,
        product: '' }
    }
    case types.PRODUCT_LOADING: {
      return {...state, loarding: true }
    }
    case types.PRODUCT_SEARCH: {
      console.log(action.payload);
      return {...state, busca: true }
    }
    case types.PRODUCT_CHANGE: {
      console.log(action.payload);
      return {...state, product: action.payload }
    }
    default: {
      return {...state}
    }
  }
}