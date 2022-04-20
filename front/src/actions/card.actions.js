export const ADD_CARD = 'ADD_CARD';

export const getCard = (product) => {
  return {
    type: 'ADD_CARD',
    payload: product,
  };
};
