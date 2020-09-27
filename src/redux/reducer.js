import {
  SET_USERS,
  INSERT_COLLABORATOR,
} from './actions';

const INITIAL_STATE = {
  collaborators: [
    {
      nome: 'Letícia Aurora Farias',
      cpf: '936.938.039-60',
      salario: 998,
      desconto: 74.85,
      dependentes: 2,
    },
    {
      nome: 'Edson Thiago Drumond',
      cpf: '748.517.476-24',
      salario: 1045,
      desconto: 78.38,
      dependentes: 1,
    },
    {
      nome: 'Fátima Elza Tereza Castro',
      cpf: '701.118.872-08',
      salario: 5500,
      desconto: 628.95,
      dependentes: 0,
    },
    {
      nome: 'Sandra Giovanna Drumond',
      cpf: '715.890.756-25',
      salario: 4522,
      desconto: 492.03,
      dependentes: 3,
    },
    {
      nome: 'Valentina Clara Nunes',
      cpf: '101.151.404-41',
      salario: 10000,
      desconto: 713.1,
      dependentes: 4,
    },
  ]
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
