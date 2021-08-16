import {
  loadEntriesPending,
  loadEntriesFulfilled,
  loadEntriesRejected,
  loadStatPending,
  loadStatFulfilled,
  loadStatRejected
} from './action';

import { APIRoute } from '../constants';
import { handleAPIError } from '../utils/handle-api-error';

export const fetchEntriesByQuery = (type, field, query) => (dispatch, _getState, api) => {
  dispatch(loadEntriesPending());
  return api.get(`${APIRoute[type]}/${field}/${query}`)
    .then(({data}) => dispatch(loadEntriesFulfilled(data)))
    .catch((error) => handleAPIError(error, dispatch, loadEntriesRejected));
};

export const fetchStat = (type) => (dispatch, _getState, api) => {
  dispatch(loadStatPending());
  /* eslint-disable no-console */
  console.log(APIRoute[type]);
  return api.get(APIRoute[type])
    .then(({data}) => dispatch(loadStatFulfilled(data)))
    .catch((error) => handleAPIError(error, dispatch, loadStatRejected));
};
