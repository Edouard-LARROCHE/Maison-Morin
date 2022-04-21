export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export const getCard = (product) => {
  return {
    type: 'ADD_CARD',
    payload: product,
  };
};

export const deleteCard = (product) => {
  return {
    type: 'DELETE_CARD',
    payload: product,
  };
};
