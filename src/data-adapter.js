import { Type, DataAdapterName } from './constants';
import moment from 'moment';
import {getOusFromDn} from './utils/get-ous-from-dn';
import {getGroups} from './utils/get-groups';

const getBoxSize = (bytes) => (bytes / 1024 / 1024 / 1024).toFixed(2);
const getQuotaSize = (kBytes) => (kBytes / 1024 / 1024).toFixed(2);

const getUserMainAdapter = (userFromAPI) => {
  const { user } = userFromAPI;
  const { person, company } = user;
  const { displayName, email, telephoneNumber } = person;
  const { name, position } = company;
  return [
    displayName ? displayName : null,
    email ? email : null,
    telephoneNumber ? telephoneNumber : null,
    name ? name : null,
    position ? position : null,
  ];
};

const getUserEmailDetailsAdapter = (userFromAPI) => {
  const { user } = userFromAPI;
  const { person, company, account } = user;
  const { displayName, email, emailBoxSize, emailQuota, whenEmailCreated } = person;
  const { name } = company;
  const { lastLogon } = account;
  return [
    displayName ? displayName : null,
    email ? email : null,
    emailBoxSize ? getBoxSize(emailBoxSize) : null,
    emailQuota ? getQuotaSize(emailQuota) : null,
    whenEmailCreated ? moment(whenEmailCreated).format('DD.MM.YYYY, HH:mm') : null,
    lastLogon ? moment(lastLogon).format('DD.MM.YYYY, HH:mm') : null,
    name ? name : null,
  ];
};

const getUserAccountAdapter = (userFromAPI) => {
  const { objectInfo, user } = userFromAPI;
  const { person, account } = user;
  const { displayName } = person;
  const { name, lastLogon, logonCount, pwdLastSet } = account;
  const { whenCreated } = objectInfo;
  return [
    displayName ? displayName : null,
    name ? name : null,
    logonCount ? logonCount : null,
    lastLogon ? moment(lastLogon).format('DD.MM.YYYY, HH:mm') : null,
    whenCreated ? moment(whenCreated).format('DD.MM.YYYY, HH:mm') : null,
    (pwdLastSet && moment(pwdLastSet).valueOf() > 0) ? moment(pwdLastSet).format('DD.MM.YYYY, HH:mm') : null,
  ];
};

const getUserLinksAdapter = (userFromAPI) => {
  const { objectInfo, user } = userFromAPI;
  const { person } = user;
  const { displayName } = person;
  const { dn, memberOf } = objectInfo;
  return [
    displayName ? displayName : null,
    memberOf ? getGroups(memberOf) : null,
    dn ? getOusFromDn(dn) : null,
  ];
};

const getUserServiceAdapter = (userFromAPI) => {
  const { objectInfo, user } = userFromAPI;
  const { person } = user;
  const { displayName } = person;
  const { dn, class: className } = objectInfo;
  return [
    displayName ? displayName : null,
    className ? [...className].join(', ') : null,
    dn ? dn : null,
  ];
};

const getGroupMainAdapter = (groupFromAPI) => {
  const { objectInfo, group } = groupFromAPI;
  const { whenCreated } = objectInfo;
  const { title, description, member: members } = group;
  return [
    title ? title : null,
    description ? description : null,
    whenCreated ? moment(whenCreated).format('DD.MM.YYYY, HH:mm') : null,
    members ? [...members].length : null,
  ];
};

const getGroupServiceAdapter = (groupFromAPI) => {
  const { objectInfo, group } = groupFromAPI;
  const { dn, class: className } = objectInfo;
  const { title } = group;
  return [
    title ? title : null,
    className ? [...className].join(', ') : null,
    dn ? dn : null,
  ];
};

const getOuMainAdapter = (ouFromAPI) => {
  const { objectInfo, ou } = ouFromAPI;
  const { whenCreated } = objectInfo;
  const { title, description, location } = ou;
  const { city, street } = location;
  return [
    title ? title : null,
    description ? description : null,
    whenCreated ? moment(whenCreated).format('DD.MM.YYYY, HH:mm') : null,
    city ? city : null,
    street ? street : null,
  ];
};

const getOuServiceAdapter = (ouFromAPI) => {
  const { objectInfo, ou } = ouFromAPI;
  const { dn, class: className } = objectInfo;
  const { title } = ou;
  return [
    title ? title : null,
    className ? [...className].join(', ') : null,
    dn ? dn : null,
  ];
};

const getAccountsMainAdapter = (dataFromAPI) => {
  const { count } = dataFromAPI;
  const { withEmails, all, enabled, disabled } = count;
  return [
    all ? all : null,
    enabled ? enabled : null,
    disabled ? disabled : null,
    withEmails ? withEmails : null,
  ];
};

const getCreationAdapter = (dataFromAPI) => {
  const { count, creation } = dataFromAPI;
  const year2021 = creation.find((item) => item.year2021).year2021;
  const year2020 = creation.find((item) => item.year2020).year2020;
  const year2019 = creation.find((item) => item.year2019).year2019;
  const year2018 = creation.find((item) => item.year2018).year2018;
  const year2017 = creation.find((item) => item.year2017).year2017;
  const rest = count.all - (year2021 + year2020 + year2019 + year2018 + year2017);
  return [
    count.all ? count.all : null,
    year2021 ? year2021 : null,
    year2020 ? year2020 : null,
    year2019 ? year2019 : null,
    year2018 ? year2018 : null,
    year2017 ? year2017 : null,
    rest ? rest : null,
  ];
};

const getAcivityAdapter = (dataFromAPI) => {
  const { count, lastLogon } = dataFromAPI;
  const year2021 = lastLogon.find((item) => item.year2021).year2021;
  const year2020 = lastLogon.find((item) => item.year2020).year2020;
  const year2019 = lastLogon.find((item) => item.year2019).year2019;
  const year2018 = lastLogon.find((item) => item.year2018).year2018;
  const year2017 = lastLogon.find((item) => item.year2017).year2017;
  const never = lastLogon.find((item) => item.never).never;
  const allActive = count.all - never;
  return [
    allActive ? allActive : null,
    year2021 ? year2021 : null,
    year2020 ? year2020 : null,
    year2019 ? year2019 : null,
    year2018 ? year2018 : null,
    year2017 ? year2017 : null,
    never ? never : null,
  ];
};

const getEmailsMainAdapter = (dataFromAPI) => {
  const { count } = dataFromAPI;
  const { allBoxesSize, all, enabled, disabled } = count;
  return [
    all ? all : null,
    enabled ? enabled : null,
    disabled ? disabled : null,
    allBoxesSize ? allBoxesSize : null,
  ];
};

export const DataAdapter = {
  [Type.USER]: {
    [DataAdapterName[Type.USER].MAIN]: getUserMainAdapter,
    [DataAdapterName[Type.USER].EMAIL_DETAILS]: getUserEmailDetailsAdapter,
    [DataAdapterName[Type.USER].ACCOUNT]: getUserAccountAdapter,
    [DataAdapterName[Type.USER].LINKS]: getUserLinksAdapter,
    [DataAdapterName[Type.USER].SERVICE]: getUserServiceAdapter,
  },
  [Type.GROUP]: {
    [DataAdapterName[Type.GROUP].MAIN]: getGroupMainAdapter,
    [DataAdapterName[Type.GROUP].SERVICE]: getGroupServiceAdapter,
  },
  [Type.OU]: {
    [DataAdapterName[Type.OU].MAIN]: getOuMainAdapter,
    [DataAdapterName[Type.OU].SERVICE]: getOuServiceAdapter,
  },
  [Type.ACCOUNTS]: {
    [DataAdapterName[Type.ACCOUNTS].MAIN]: getAccountsMainAdapter,
    [DataAdapterName[Type.ACCOUNTS].CREATION]: getCreationAdapter,
    [DataAdapterName[Type.ACCOUNTS].ACTIVITY]: getAcivityAdapter,
  },
  [Type.EMAILS]: {
    [DataAdapterName[Type.EMAILS].MAIN]: getEmailsMainAdapter,
    [DataAdapterName[Type.EMAILS].CREATION]: getCreationAdapter,
    [DataAdapterName[Type.EMAILS].ACTIVITY]: getAcivityAdapter,
    [DataAdapterName[Type.EMAILS].TOP_VOLUME]: getUserEmailDetailsAdapter,
  },
};
