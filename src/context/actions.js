import * as types from './types';

export const productLoad = async (dispatch, product) => {

  dispatch({type: types.PRODUCT_LOADING});

  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return () => dispatch({type: types.PRODUCT_SUCCESS , payload: data});
}

export const productSearch = (dispatch) => {
  dispatch({type: types.PRODUCT_SEARCH});
}

export const productChange = (dispatch, info) => {
  dispatch({type: types.PRODUCT_CHANGE, payload: info})
}

export const itemLoad = async (dispatch, id) => {

  dispatch({type: types.ITEM_LOADING});

  const endPoint = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  dispatch({type: types.ITEM_SUCCESS, payload: data});
}