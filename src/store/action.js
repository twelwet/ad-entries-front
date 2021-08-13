import { Status } from '../constants';

export const ActionType = {
  LOAD_ENTRIES_PENDING: `api/load-entries_${Status.PENDING}`,
  LOAD_ENTRIES_FULFILLED: `api/load-entries_${Status.FULFILLED}`,
  LOAD_ENTRIES_REJECTED: `api/load-entries_${Status.REJECTED}`,
  CHANGE_SEARCH_FIELD: 'app/change-search-field',
  CHANGE_ENTRIES_TYPE: 'app/change-entries-type',
  CHANGE_DATA_ADAPTER_NAME: 'app/change-data-adapter-name',
  CHANGE_STAT_TYPE: 'app/change-stat-type',
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

export const changeEntriesType = (type) => ({
  type: ActionType.CHANGE_ENTRIES_TYPE,
  payload: type,
});

export const changeDataAdapterName = (adapterName) => ({
  type: ActionType.CHANGE_DATA_ADAPTER_NAME,
  payload: adapterName,
});

export const changeStatType = (type) => ({
  type: ActionType.CHANGE_STAT_TYPE,
  payload: type,
});
