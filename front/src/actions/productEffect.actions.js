export const GET_PRODUCTEFFECT = 'GET_PRODUCTEFFECT';

export const getProductEffect = (productEffect) => {
  return async (dispatch) => {
    dispatch({ type: GET_PRODUCTEFFECT, payload: productEffect });
  };
};
