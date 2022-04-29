import axios from 'axios';

export const GET_USER = 'GET_USER';
export const ADD_CARD = 'ADD_CARD';

export const getUser = (uid) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/user/${uid}`);
      dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const addCard = (uid, shopCart) => {
  return async (dispatch) => {
    return await axios({
      method: 'patch',
      url: `api/user/${uid}`,
      data: { shopCart },
    })
      .then((res) => {
        dispatch({ type: ADD_CARD, payload: uid });
      })
      .catch((err) => console.log(err));
  };
};
