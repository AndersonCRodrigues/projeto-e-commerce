import * as types from './types';

export const productLoad = async (dispatch) => {
  
  dispatch({type: types.PRODUCT_LOADING});

  const endPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const response = await fetch(endPoint);
  const data = await response.json();
  dispatch({type: types.PRODUCT_SUCCESS , payload: data});
  console.log(data.results);
}