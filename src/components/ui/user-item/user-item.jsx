import React from 'react';
import PropTypes from 'prop-types';
import userDataProps from '../../../prop-types/user-data.prop';

function UserItem({ user, count }) {
  const {
    // objectInfo,
    person,
    company,
    // account,
  } = user;

  return (
    <tr>
      <th scope="row">{count}</th>
      <td>{person.surname}</td>
      <td>{person.name}</td>
      <td>{person.email}</td>
      <td>{person.telephoneNumber}</td>
      <td>{company.name}</td>
      <td>{company.position}</td>
    </tr>
  );
}

UserItem.propTypes = {
  count: PropTypes.number.isRequired,
  user: userDataProps,
};

export default UserItem;
