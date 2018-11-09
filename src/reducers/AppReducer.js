import {
  FETCH_ACTIONS,
  FETCH_CUENTAS
} from '../actions/AppActions';

const initialState = {
  acciones: {},
  cuentas: {},
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACTIONS:
      return Object.assign({}, {}, { acciones: action.payload });
    case FETCH_CUENTAS:
      return Object.assign({}, {}, { cuentas: action.payload });
    default:
      return state;
  }
}