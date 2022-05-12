export const GET_CARD = 'GET_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export const getCard = (card) => {
  return async (dispatch) => {
    dispatch({ type: GET_CARD, payload: card });
  };
};

export const removeCard = (card) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_CARD, payload: card });
  };
};
