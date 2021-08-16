import { Status } from '../constants';

export const ActionType = {
  LOAD_ENTRIES_PENDING: `api/load-entries_${Status.PENDING}`,
  LOAD_ENTRIES_FULFILLED: `api/load-entries_${Status.FULFILLED}`,
  LOAD_ENTRIES_REJECTED: `api/load-entries_${Status.REJECTED}`,

  LOAD_STAT_PENDING: `api/load-stat_${Status.PENDING}`,
  LOAD_STAT_FULFILLED: `api/load-stat_${Status.FULFILLED}`,
  LOAD_STAT_REJECTED: `api/load-stat_${Status.REJECTED}`,

  CHANGE_SEARCH_FIELD: 'app/change-search-field',
  CHANGE_ENTRIES_TYPE: 'app/change-entries-type',
  CHANGE_ENTRIES_DATA_ADAPTER: 'app/change-entries-data-adapter',

  CHANGE_STAT_DATA_ADAPTER_SET: 'app/change-stat-data-adapter-set',
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

export const loadStatPending = () => ({
  type: ActionType.LOAD_STAT_PENDING,
});

export const loadStatFulfilled = (data) => ({
  type: ActionType.LOAD_STAT_FULFILLED,
  payload: data,
});

export const loadStatRejected = (errorMessage) => ({
  type: ActionType.LOAD_STAT_REJECTED,
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

export const changeEntriesDataAdapter = (adapterName) => ({
  type: ActionType.CHANGE_ENTRIES_DATA_ADAPTER,
  payload: adapterName,
});

export const changeStatDataAdapterSet = (adapterSetName) => ({
  type: ActionType.CHANGE_STAT_DATA_ADAPTER_SET,
  payload: adapterSetName,
});

export const changeStatType = (type) => ({
  type: ActionType.CHANGE_STAT_TYPE,
  payload: type,
});
