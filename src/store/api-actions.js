import {
  loadEntriesPending,
  loadEntriesFulfilled,
  loadEntriesRejected
} from './action';

import { APIRoute } from '../constants';
import { handleAPIError } from '../utils/handle-api-error';

export const fetchEntriesByQuery = (type, field, query) => (dispatch, _getState, api) => {
  dispatch(loadEntriesPending());
  return api.get(`${APIRoute[type]}/${field}/${query}`)
    .then(({data}) => dispatch(loadEntriesFulfilled(data)))
    .catch((error) => handleAPIError(error, dispatch, loadEntriesRejected));
};
