export const SET_USERS = 'users/SET_USERS';
export const INSERT_USER = 'users/INSERT_USER';

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const insertUser = (user) => ({
  type: INSERT_USER,
  payload: user,
});
