const HttpCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

const Type = {
  USER: 'User',
  GROUP: 'Group',
  OU: 'Ou',
};

const SearchField = {
  [Type.USER]: {
    ACCOUNT_NAME: 'sAMAccountName',
    DISPLAY_NAME: 'displayName',
    TEL: 'telephoneNumber',
    COMPANY: 'company',
  },
  [Type.GROUP]: {
    NAME: 'cn',
  },
  [Type.OU]: {
    NAME: 'description',
  },
};

const SearchTab = {
  [Type.USER]: [{
    NAME: 'Полное имя',
    FIELD: SearchField.User.DISPLAY_NAME,
  }, {
    NAME: 'Аккаунт',
    FIELD: SearchField.User.ACCOUNT_NAME,
  }, {
    NAME: 'Телефон',
    FIELD: SearchField.User.TEL,
  }, {
    NAME: 'Организация',
    FIELD: SearchField.User.COMPANY,
  }],
  [Type.GROUP]: [{
    NAME: 'Название группы',
    FIELD: SearchField.Group.NAME,
  }],
  [Type.OU]: [{
    NAME: 'Описание юнита',
    FIELD: SearchField.Ou.NAME,
  }],
};

const APIRoute = {
  [Type.USER]: '/users',
  [Type.OU]: '/ous',
  [Type.GROUP]: '/groups',
};

const TableHead = {
  [Type.USER]: ['#', 'Полное имя', 'Email', 'Gb', 'Создан', 'Заходил', 'Организация'],
  [Type.GROUP]: ['#', 'Название', 'Описание', 'Создан', 'Кол-во участников'],
  [Type.OU]: ['#', 'Название', 'Описание', 'Создан', 'Город', 'Улица'],
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

const MOCK = '-';

export { HttpCode, Type, APIRoute, AppRoute, Status, ErrorInfoMessage, BACKEND_URL, REQUEST_TIMEOUT, SearchTab, TableHead, MOCK };
