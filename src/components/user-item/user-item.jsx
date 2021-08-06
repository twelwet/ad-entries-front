import React from 'react';
import userDataProps from '../../prop-types/user-data.prop';

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
  user: userDataProps,
};

export default UserItem;
