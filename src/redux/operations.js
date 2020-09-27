import * as userActions from './actions';

export const insertUser = (user) => async (dispatch) => {
  dispatch(userActions.insertUser(user));
};

export const setUsers = (users) => async (dispatch) => {
  dispatch(userActions.setUsers(users));
};
