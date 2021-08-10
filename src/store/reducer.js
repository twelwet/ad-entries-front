import { ActionType } from './action';
import { Status, SearchField } from '../constants';

const initialState = {
  searchUsers: {
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
        searchUsers: { ...state.searchUsers, status: Status.PENDING },
      };
    case ActionType.LOAD_ENTRIES_FULFILLED:
      return {
        ...state,
        searchUsers: {
          ...state.searchUsers,
          status: Status.FULFILLED,
          data: action.payload,
        },
      };
    case ActionType.LOAD_ENTRIES_REJECTED:
      return {
        ...state,
        searchUsers: {
          ...state.searchUsers,
          status: Status.REJECTED,
          error: { message: action.payload },
        },
      };
    case ActionType.CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchUsers: { ...state.searchUsers, field: action.payload },
      };
    default:
      return state;
  }
};
