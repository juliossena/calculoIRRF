import {
  SET_USERS,
  INSERT_USER,
} from './actions';

const INITIAL_STATE = {
  users: [],
};

export default (state = INITIAL_STATE, action = null) => {
  if (!action) return state;
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case INSERT_USER:
      return {
        ...state,
        users: state.users.concat([action.payload]),
      };
    default:
      return state;
  }
};
