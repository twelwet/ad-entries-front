import { ActionType } from './action';
import { Status, SearchTab, Type, DataAdapterName, DataAdapterSetName } from '../constants';

const initialState = {
  entries: {
    type: Type.USER,
    dataAdapterName: DataAdapterName[Type.USER].MAIN,
    searchTabs: SearchTab[Type.USER],
    field: SearchTab[Type.USER][0].FIELD,
    status: Status.IDLE,
    data: [],
    error: { message: null },
  },
  stat: {
    type: Type.ACCOUNTS,
    dataAdapterSetName: DataAdapterSetName[Type.ACCOUNTS].MAIN,
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
    case ActionType.CHANGE_ENTRIES_DATA_ADAPTER:
      return {
        ...state,
        entries: { ...state.entries, dataAdapterName: action.payload },
      };
    case ActionType.CHANGE_STAT_DATA_ADAPTER_SET:
      return {
        ...state,
        stat: { ...state.stat, dataAdapterSetName: action.payload },
      };
    case ActionType.CHANGE_ENTRIES_TYPE:
      return {
        ...state,
        entries: {
          ...state.entries,
          type: action.payload,
          dataAdapterName: DataAdapterName[action.payload].MAIN,
          searchTabs: SearchTab[action.payload],
          field:SearchTab[action.payload][0].FIELD,
          status: Status.IDLE,
          data: [],
        },
      };
    case ActionType.CHANGE_STAT_TYPE:
      return {
        ...state,
        stat: {
          ...state.stat,
          type: action.payload,
        },
      };
    case ActionType.LOAD_STAT_PENDING:
      return {
        ...state,
        stat: { ...state.stat, status: Status.PENDING },
      };
    case ActionType.LOAD_STAT_FULFILLED:
      return {
        ...state,
        stat: {
          ...state.stat,
          status: Status.FULFILLED,
          data: action.payload,
        },
      };
    case ActionType.LOAD_STAT_REJECTED:
      return {
        ...state,
        stat: {
          ...state.stat,
          status: Status.REJECTED,
          error: { message: action.payload },
        },
      };
    default:
      return state;
  }
};
