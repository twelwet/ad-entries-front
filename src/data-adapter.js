import { Type } from './constants';
import moment from 'moment';

const getBoxSize = (bytes) => (bytes / 1024 / 1024 / 1024).toFixed(2);

const getUserAdapter = (userFromAPI) => {
  const { user } = userFromAPI;
  const { person, company, account } = user;
  const { displayName, email, emailBoxSize, whenEmailCreated } = person;
  const { name } = company;
  const { lastLogon } = account;
  return [
    displayName ? displayName : null,
    email ? email : null,
    emailBoxSize ? getBoxSize(emailBoxSize) : null,
    whenEmailCreated ? moment(whenEmailCreated).format('DD.MM.YYYY, HH:mm') : null,
    lastLogon ? moment(lastLogon).format('DD.MM.YYYY, HH:mm') : null,
    name ? name : null,
  ];
};

const getGroupAdapter = (groupFromAPI) => {
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
  [Type.USER]: getUserAdapter,
  [Type.GROUP]: getGroupAdapter,
  [Type.OU]: getOuAdapter,
};
