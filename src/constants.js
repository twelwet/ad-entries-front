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
  ACCOUNTS: 'Accounts',
  EMAILS: 'Emails',
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
    DESCRIPTION: 'description',
  },
  [Type.OU]: {
    NAME: 'ou',
    DESCRIPTION: 'description',
  },
};

const SearchTab = {
  [Type.USER]: [{
    NAME: 'Полное имя',
    FIELD: SearchField[Type.USER].DISPLAY_NAME,
  }, {
    NAME: 'Аккаунт',
    FIELD: SearchField[Type.USER].ACCOUNT_NAME,
  }, {
    NAME: 'Телефон',
    FIELD: SearchField[Type.USER].TEL,
  }, {
    NAME: 'Организация',
    FIELD: SearchField[Type.USER].COMPANY,
  }],
  [Type.GROUP]: [{
    NAME: 'Название группы',
    FIELD: SearchField[Type.GROUP].NAME,
  }, {
    NAME: 'Описание группы',
    FIELD: SearchField[Type.GROUP].DESCRIPTION,
  }],
  [Type.OU]: [{
    NAME: 'Название юнита',
    FIELD: SearchField[Type.OU].NAME,
  }, {
    NAME: 'Описание юнита',
    FIELD: SearchField[Type.OU].DESCRIPTION,
  }],
};

const APIRoute = {
  [Type.USER]: '/users',
  [Type.OU]: '/ous',
  [Type.GROUP]: '/groups',
  [Type.ACCOUNTS]: '/accounts',
  [Type.EMAILS]: '/emails',
};

const DataAdapterName = {
  [Type.USER]: {
    MAIN: 'main',
    EMAIL_DETAILS: 'emailDetails',
    ACCOUNT: 'account',
    LINKS: 'links',
    SERVICE: 'service',
  },
  [Type.GROUP]: {
    MAIN: 'main',
    SERVICE: 'service',
  },
  [Type.OU]: {
    MAIN: 'main',
    SERVICE: 'service',
  },
  [Type.ACCOUNTS]: {
    MAIN: 'main',
    CREATION: 'creation',
    ACTIVITY: 'activity',
  },
  [Type.EMAILS]: {
    MAIN: 'main',
    CREATION: 'creation',
    ACTIVITY: 'activity',
    TOP_VOLUME: 'top-volume',
  },
};

const DataAdapterSetName = {
  [Type.ACCOUNTS]: {
    MAIN: 'main',
  },
  [Type.EMAILS]: {
    MAIN: 'main',
    TOP_VOLUME: 'top-volume',
  },
};

const TableHead = {
  [Type.USER]: {
    [DataAdapterName[Type.USER].MAIN]: ['#', 'Полное имя', 'Email', 'Телефон', 'Организация', 'Должность'],
    [DataAdapterName[Type.USER].EMAIL_DETAILS]: ['#', 'Полное имя', 'Email', 'Размер', 'Квота', 'Создан', 'Заходил', 'Организация'],
    [DataAdapterName[Type.USER].ACCOUNT]: ['#', 'Полное имя', 'Аккаунт', 'Входов', 'Последний вход', 'Создан', 'Менял пароль'],
    [DataAdapterName[Type.USER].LINKS]: ['#', 'Полное имя', 'Группы', 'Юниты'],
    [DataAdapterName[Type.USER].SERVICE]: ['#', 'Полное имя', 'Класс', 'Доменная запись'],
  },
  [Type.GROUP]: {
    [DataAdapterName[Type.GROUP].MAIN]: ['#', 'Название', 'Описание', 'Создан', 'Кол-во участников'],
    [DataAdapterName[Type.GROUP].SERVICE]: ['#', 'Название', 'Класс', 'Доменная запись'],
  },
  [Type.OU]: {
    [DataAdapterName[Type.OU].MAIN]: ['#', 'Название', 'Описание', 'Создан', 'Город', 'Улица'],
    [DataAdapterName[Type.OU].SERVICE]: ['#', 'Название', 'Класс', 'Доменная запись'],
  },
  [Type.ACCOUNTS]: {
    [DataAdapterName[Type.ACCOUNTS].MAIN]: ['Всего аккаунтов', 'Задействованных', 'Заблокированых', 'Аккаунтов с почтой'],
    [DataAdapterName[Type.ACCOUNTS].CREATION]: ['Создано', '2021', '2020', '2019', '2018', '2017', 'Ранее'],
    [DataAdapterName[Type.ACCOUNTS].ACTIVITY]: ['Активность', '2021', '2020', '2019', '2018', '2017', 'Ни одного логина'],
  },
  [Type.EMAILS]: {
    [DataAdapterName[Type.EMAILS].MAIN]: ['Почтовых аккаунтов', 'Задействованных', 'Заблокированых', 'Общий объем, Gb'],
    [DataAdapterName[Type.EMAILS].CREATION]: ['Создано', '2021', '2020', '2019', '2018', '2017', 'Ранее'],
    [DataAdapterName[Type.EMAILS].ACTIVITY]: ['Активность', '2021', '2020', '2019', '2018', '2017', 'Ни одного логина'],
    [DataAdapterName[Type.EMAILS].TOP_VOLUME]: ['#', 'Полное имя', 'Email', 'Размер', 'Квота', 'Создан', 'Заходил', 'Организация'],
  },
};

const DataAdapterSet = {
  [Type.ACCOUNTS]: {
    [DataAdapterSetName[Type.ACCOUNTS].MAIN]: [
      DataAdapterName[Type.ACCOUNTS].MAIN,
      DataAdapterName[Type.ACCOUNTS].CREATION,
      DataAdapterName[Type.ACCOUNTS].ACTIVITY,
    ],
  },
  [Type.EMAILS]: {
    [DataAdapterSetName[Type.EMAILS].MAIN]: [
      DataAdapterName[Type.EMAILS].MAIN,
      DataAdapterName[Type.EMAILS].CREATION,
      DataAdapterName[Type.EMAILS].ACTIVITY,
    ],
    [DataAdapterSetName[Type.EMAILS].TOP_VOLUME]: [
      DataAdapterName[Type.EMAILS].TOP_VOLUME,
    ],
  },
};

const EntriesTab = {
  [Type.USER]: [{
    name: 'Основное',
    adapter: DataAdapterName[Type.USER].MAIN,
  }, {
    name: 'Почта: подробнее',
    adapter: DataAdapterName[Type.USER].EMAIL_DETAILS,
  }, {
    name: 'Аккаунт',
    adapter: DataAdapterName[Type.USER].ACCOUNT,
  }, {
    name: 'Связи',
    adapter: DataAdapterName[Type.USER].LINKS,
  }, {
    name: 'Служебное',
    adapter: DataAdapterName[Type.USER].SERVICE,
  }],

  [Type.GROUP]: [{
    name: 'Основное',
    adapter: DataAdapterName[Type.GROUP].MAIN,
  }, {
    name: 'Служебное',
    adapter: DataAdapterName[Type.GROUP].SERVICE,
  }],

  [Type.OU]: [{
    name: 'Основное',
    adapter: DataAdapterName[Type.OU].MAIN,
  }, {
    name: 'Служебное',
    adapter: DataAdapterName[Type.OU].SERVICE,
  }],
};

const StatTabs = {
  [Type.ACCOUNTS]: [{
    name: 'Основное',
    adapterSet: DataAdapterSetName[Type.ACCOUNTS].MAIN,
  }],

  [Type.EMAILS]: [{
    name: 'Основное',
    adapterSet: DataAdapterSetName[Type.EMAILS].MAIN,
  }, {
    name: 'Топ-100',
    adapterSet: DataAdapterSetName[Type.EMAILS].TOP_VOLUME,
  }],
};

const AppRoute = {
  MAIN: '/',
  SEARCH: '/search',
  STAT: '/stat',
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

const NavTabs = {
  [AppRoute.SEARCH]: [{
    name: 'Пользователи',
    type: Type.USER,
  }, {
    name: 'Группы',
    type: Type.GROUP,
  }, {
    name: 'Юниты',
    type: Type.OU,
  }],
  [AppRoute.STAT]: [{
    name: 'Аккаунты',
    type: Type.ACCOUNTS,
  }, {
    name: 'Ящики',
    type: Type.EMAILS,
  }],
};

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
  StatTabs,
  DataAdapterName,
  DataAdapterSet,
  DataAdapterSetName,
  MOCK,
  NavTabs
};
