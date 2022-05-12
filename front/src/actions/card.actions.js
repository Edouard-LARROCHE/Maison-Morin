export const GET_CARD = 'GET_CARD';

export const getCard = (card) => {
  return async (dispatch) => {
    dispatch({ type: GET_CARD, payload: card });
  };
};
