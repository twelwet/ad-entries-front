import React, {useState} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import userDataProps from '../../../prop-types/user-data.prop';

function UserItem({ user, count }) {
  const [detailsFlag, setDetailsFlag] = useState(false);

  const {
    objectInfo,
    person,
    company,
    account,
  } = user;

  return (
    <>
      <tr
        style={{cursor: 'pointer'}}
        onClick={() => setDetailsFlag(!detailsFlag)}
        className="accordion"
        data-bs-toggle="collapse"
        data-bs-target={`#${objectInfo.dn}`}
      >
        <th scope="row">{count}</th>
        <td>{person.surname ? person.surname : '-'}</td>
        <td>{person.name ? person.name : '-'}</td>
        <td>{person.email ? person.email : '-'}</td>
        <td>{person.telephoneNumber ? person.telephoneNumber : '-'}</td>
        <td>{company.name ? company.name : '-'}</td>
        <td>{company.position ? company.position : '-'}</td>
      </tr>
      <tr className="bg-light">
        <td id={objectInfo.dn} colSpan="7" className={detailsFlag ? 'collapse show' : 'collapse'}>
          <p>Аккаунт: <b>{account.name}</b>, создан: <b>{account.whenCreated ? moment(account.whenCreated).format('DD.MM.YYYY HH:mm') : '-'}</b></p>
          <p>Последний вход: <b>{account.lastLogon ? moment(account.lastLogon).format('DD.MM.YYYY HH:mm') : '-'}</b></p>
        </td>
      </tr>
    </>
  );
}

UserItem.propTypes = {
  count: PropTypes.number.isRequired,
  user: userDataProps,
};

export default UserItem;
