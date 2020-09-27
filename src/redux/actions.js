export const SET_USERS = 'collabortor/SET_USERS';
export const INSERT_COLLABORATOR = 'collabortor/INSERT_COLLABORATOR';

export const setCollaborators = (collaborators) => ({
  type: SET_USERS,
  payload: collaborators,
});

export const insertCollaborator = (collaborator) => ({
  type: INSERT_COLLABORATOR,
  payload: collaborator,
});
