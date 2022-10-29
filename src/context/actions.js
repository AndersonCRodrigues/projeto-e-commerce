import * as types from './types';

export const productLoad = async (dispatch, product) => {

  dispatch({type: types.PRODUCT_LOADING});

  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  dispatch({type: types.PRODUCT_SUCCESS , payload: data});
  console.log(data.results);
}

export const producSeach = (dispatch, payload) => {
  dispatch({type: types.PRODUCT_SEARCH, payload});
}

export const productChange = (dispatch, info) => {
  dispatch({type: types.PRODUCT_CHANGE, payload: info})
}