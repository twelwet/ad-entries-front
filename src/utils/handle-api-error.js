import {ErrorInfoMessage, HttpCode} from '../constants';

export const handleAPIError = (error, dispatch, action) => {
  if (error.response) {
    const {status, config} = error.response;
    switch (status) {
      case HttpCode.NOT_FOUND:
        // dispatch(redirectToRoute(AppRoute.NOT_FOUND));
        dispatch(action(`${status}. ${ErrorInfoMessage.NOT_FOUND}: ${config.url}`));
        break;
      case HttpCode.BAD_REQUEST:
        dispatch(action(`${status}. ${ErrorInfoMessage.BAD_REQUEST}: ${config.url}`));
        break;
      // case HttpCode.UNAUTHORIZED:
      //   dispatch(redirectToRoute(AppRoute.LOGIN));
      //   dispatch(action(`${status}. ${ErrorInfoMessage.UNAUTHORIZED}: ${config.url}`));
      //   break;
      default:
        dispatch(action(`${status}. ${ErrorInfoMessage.UNHANDLED}: ${config.url}`));
        break;
    }
  } else if (error.request) {
    dispatch(action(`${ErrorInfoMessage.REQUEST_PROBLEM}: ${error.request.baseUrl}`));
  } else {
    dispatch(action(ErrorInfoMessage.DEFAULT_MESSAGE));
  }
};
