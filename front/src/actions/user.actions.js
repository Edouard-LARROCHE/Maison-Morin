import axios from 'axios';

export const GET_USER = 'GET_USER';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';

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

export const addCard = (uid) => {
  return async (dispatch) => {
    return await axios({
      method: 'patch',
      url: `api/user/addCard/${uid}`,
      data: uid,
    })
      .then((res) => {
        dispatch({ type: ADD_CARD, payload: uid });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteCard = (uid) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_CARD, payload: uid });
  };
};
