import { ActionType } from './action';
import { Status } from '../constants';

const initialState = {
  status: Status.IDLE,
  data: [],
  error: { message: null },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ENTRIES_PENDING:
      return {
        ...state,
        status: Status.PENDING,
      };
    case ActionType.LOAD_ENTRIES_FULFILLED:
      return {
        ...state,
        status: Status.FULFILLED,
        data: action.payload,
      };
    case ActionType.LOAD_ENTRIES_REJECTED:
      return {
        ...state,
        status: Status.REJECTED,
        error: { message: action.payload },
      };
    default:
      return state;
  }
};
