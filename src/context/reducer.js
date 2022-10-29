import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.PRODUCT_SUCCESS: {
      console.log(action.payload);
      return {...state, products: action.payload.results, loarding: false }
    }
    case types.PRODUCT_LOADING: {
      console.log(action.payload);
      return {...state, loarding: true }
    }
    default: {
      return {...state}
    }
  }
}