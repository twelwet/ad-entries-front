const HttpCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

const SearchField = {
  User: {
    NICK_NAME: 'sAMAccountName',
    FULL_NAME: 'cn',
    TEL: 'telephoneNumber',
    COMPANY: 'company',
  },
};

const APIRoute = {
  USERS: '/users',
  OUS: '/ous',
  GROUPS: '/groups',
};

const AppRoute = {
  MAIN: '/',
  SEARCH: '/search',
};

const Status = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
};

const ErrorInfoMessage = {
  DEFAULT_MESSAGE: 'Something went wrong',
  NOT_FOUND: 'Resource not found',
  BAD_REQUEST: 'Incorrect request',
  UNAUTHORIZED: 'Unauthorized access',
  UNHANDLED: 'Unhandled response code',
  REQUEST_PROBLEM: 'Something went wrong with request',
};

const BACKEND_URL = `http://${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

const REQUEST_TIMEOUT = 15000;

export { HttpCode, APIRoute, AppRoute, Status, ErrorInfoMessage, BACKEND_URL, REQUEST_TIMEOUT, SearchField };
