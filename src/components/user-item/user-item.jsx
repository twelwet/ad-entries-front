import React from 'react';
import PropTypes from 'prop-types';

function UserItem({user}) {
  const {
    objectInfo,
    person,
    company,
    account,
  } = user;

  return (
    <li key={objectInfo.dn}>
      <p>Аккаунт {account.name}</p>
      <p>Создан {account.whenCreated}</p>
      <p>Фамилия: {person.surname}</p>
      <p>Имя: {person.name}</p>
      <p>Организация: {company.name}</p>
      <p>Email: {person.email}</p>
      <p>Телефон: {person.telephoneNumber}</p>
      <p>Активность: {account.lastLogon}</p>
    </li>
  );
}

UserItem.propTypes = {
  user: PropTypes.shape({
    objectInfo: PropTypes.shape({
      // class: PropTypes.string.isRequired,
      dn: PropTypes.string.isRequired,
    }),
    person: PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      // fullName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      telephoneNumber: PropTypes.string.isRequired,
      // whenEmailCreated: PropTypes.string.isRequired,
    }),
    company: PropTypes.shape({
      // position: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    account: PropTypes.shape({
      name: PropTypes.string.isRequired,
      // fullName: PropTypes.string.isRequired,
      lastLogon: PropTypes.string.isRequired,
      whenCreated: PropTypes.string.isRequired,
      // whenChanged: PropTypes.string.isRequired,
      // pwdLastSet: PropTypes.string.isRequired,
      // logonCount: PropTypes.string.isRequired,
    }),
  }),
};

export default UserItem;
