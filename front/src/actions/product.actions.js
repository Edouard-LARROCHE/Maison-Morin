export const GET_PRODUCT = 'GET_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const getProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: GET_PRODUCT, payload: product });
  };
};

export const removeProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_PRODUCT, payload: product });
  };
};
