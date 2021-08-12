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
  const { category, class: className } = objectInfo;
  return [
    displayName ? displayName : null,
    className ? [...className].join(', ') : null,
    category ? category : null,
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
  const { category, class: className } = objectInfo;
  const { title } = group;
  return [
    title ? title : null,
    className ? [...className].join(', ') : null,
    category ? category : null,
  ];
};

const getOuAdapter = (ouFromAPI) => {
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
    [DataAdapterName[Type.OU].MAIN]: getOuAdapter,
  },
};
