import { Status } from '../constants';

export const ActionType = {
  LOAD_ENTRIES_PENDING: `api/load-entries_${Status.PENDING}`,
  LOAD_ENTRIES_FULFILLED: `api/load-entries_${Status.FULFILLED}`,
  LOAD_ENTRIES_REJECTED: `api/load-entries_${Status.REJECTED}`,
  CHANGE_SEARCH_FIELD: 'app/change-search-field',
};

export const loadEntriesPending = () => ({
  type: ActionType.LOAD_ENTRIES_PENDING,
});

export const loadEntriesFulfilled = (entries) => ({
  type: ActionType.LOAD_ENTRIES_FULFILLED,
  payload: entries,
});

export const loadEntriesRejected = (errorMessage) => ({
  type: ActionType.LOAD_ENTRIES_REJECTED,
  payload: errorMessage,
});

export const changeSearchField = (fieldName) => ({
  type: ActionType.CHANGE_SEARCH_FIELD,
  payload: fieldName,
});