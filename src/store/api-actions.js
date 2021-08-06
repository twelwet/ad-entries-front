import {
  loadEntriesPending,
  loadEntriesFulfilled,
  loadEntriesRejected
} from './action';

import { APIRoute } from '../constants';
import { handleAPIError } from '../utils/handle-api-error';

export const fetchUsersByMailQuery = (query) => (dispatch, _getState, api) => {
  dispatch(loadEntriesPending());
  return api.get(`${APIRoute.USERS}/mail/${query}`)
    .then(({data}) => dispatch(loadEntriesFulfilled(data)))
    .catch((error) => handleAPIError(error, dispatch, loadEntriesRejected));
};
