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

const DataAdapterName = {
  [Type.USER]: {
    MAIN: 'main',
    EMAIL_DETAILS: 'emailDetails',
    ACCOUNT: 'account',
    SERVICE: 'service',
  },
  [Type.GROUP]: {
    MAIN: 'main',
  },
  [Type.OU]: {
    MAIN: 'main',
  },
};

const TableHead = {
  [Type.USER]: {
    [DataAdapterName[Type.USER].MAIN]: ['#', 'Полное имя', 'Email', 'Телефон', 'Организация', 'Должность'],
    [DataAdapterName[Type.USER].EMAIL_DETAILS]: ['#', 'Полное имя', 'Email', 'Размер', 'Квота', 'Создан', 'Заходил', 'Организация'],
    [DataAdapterName[Type.USER].ACCOUNT]: ['#', 'Полное имя', 'Аккаунт', 'Входов', 'Последний вход', 'Создан', 'Менял пароль'],
    [DataAdapterName[Type.USER].SERVICE]: ['#', 'Полное имя', 'Группы', 'Юниты'],
  },
  [Type.GROUP]: {
    [DataAdapterName[Type.GROUP].MAIN]: ['#', 'Название', 'Описание', 'Создан', 'Кол-во участников'],
  },
  [Type.OU]: {
    [DataAdapterName[Type.OU].MAIN]: ['#', 'Название', 'Описание', 'Создан', 'Город', 'Улица'],
  },
};

const EntriesTab = {
  [Type.USER]: [{
    name:'Основное',
    adapter: DataAdapterName[Type.USER].MAIN,
  }, {
    name: 'Почта: подробнее',
    adapter: DataAdapterName[Type.USER].EMAIL_DETAILS,
  }, {
    name: 'Аккаунт',
    adapter: DataAdapterName[Type.USER].ACCOUNT,
  }, {
    name: 'Связи',
    adapter: DataAdapterName[Type.USER].SERVICE,
  }],
  [Type.GROUP]: [{
    name: 'Основное',
    adapter: DataAdapterName[Type.USER].MAIN,
  }],
  [Type.OU]: [{
    name: 'Основное',
    adapter: DataAdapterName[Type.USER].MAIN,
  }],
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

export {
  HttpCode,
  Type,
  APIRoute,
  AppRoute,
  Status,
  ErrorInfoMessage,
  BACKEND_URL,
  REQUEST_TIMEOUT,
  SearchTab,
  TableHead,
  EntriesTab,
  DataAdapterName,
  MOCK
};
