import {
  SET_USERS,
  INSERT_COLLABORATOR,
} from './actions';

const INITIAL_STATE = {
  collaborators: []
  ,
};

export default (state = INITIAL_STATE, action = null) => {
  if (!action) return state;
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        collaborators: action.payload,
      };
    case INSERT_COLLABORATOR:
      return {
        ...state,
        collaborators: state.collaborators.concat([action.payload]),
      };
    default:
      return state;
  }
};
