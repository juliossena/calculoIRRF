import * as userActions from './actions';

export const insertCollaborator = (user) => async (dispatch) => {
  dispatch(userActions.insertCollaborator(user));
};

export const setCollaborators = (users) => async (dispatch) => {
  dispatch(userActions.setCollaborators(users));
};
