import { ActionType } from './action';
import { Status, SearchField, APIRoute } from '../constants';

const initialState = {
  entries: {
    type: APIRoute.USERS,
    field: SearchField.User.DISPLAY_NAME,
    status: Status.IDLE,
    data: [],
    error: { message: null },
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ENTRIES_PENDING:
      return {
        ...state,
        entries: { ...state.entries, status: Status.PENDING },
      };
    case ActionType.LOAD_ENTRIES_FULFILLED:
      return {
        ...state,
        entries: {
          ...state.entries,
          status: Status.FULFILLED,
          data: action.payload,
        },
      };
    case ActionType.LOAD_ENTRIES_REJECTED:
      return {
        ...state,
        entries: {
          ...state.entries,
          status: Status.REJECTED,
          error: { message: action.payload },
        },
      };
    case ActionType.CHANGE_SEARCH_FIELD:
      return {
        ...state,
        entries: { ...state.entries, field: action.payload },
      };
    case ActionType.CHANGE_ENTRIES_TYPE:
      return {
        ...state,
        entries: { ...state.entries, type: action.payload },
      };
    default:
      return state;
  }
};
