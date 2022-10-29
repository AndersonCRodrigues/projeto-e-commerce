import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.PRODUCT_SUCCESS: {
      return {...state, products: action.payload.results,
        loarding: false,
        busca: false,
        searchBy: state.product,
        product: '' }
    }
    case types.PRODUCT_LOADING: {
      return {...state, loarding: true }
    }
    case types.PRODUCT_SEARCH: {
      return {...state, busca: true }
    }
    case types.PRODUCT_CHANGE: {
      return {...state,
        product: action.payload,
      }
    }
    case types.ITEM_SUCCESS: {
      return {...state,
        items: [...state.items, action.payload],
        itemLoarding: false,
      }
    }
    case types.ITEM_LOADING: {
      return {...state, itemLoarding: true }
    }
    default: {
      return {...state}
    }
  }
}