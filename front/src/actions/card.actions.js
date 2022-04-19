import axios from 'axios';

export const ADD_CARD = 'ADD_CARD';

export const getCard = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/picture/cave/vins`);
      dispatch({ type: ADD_CARD, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
  };
};
