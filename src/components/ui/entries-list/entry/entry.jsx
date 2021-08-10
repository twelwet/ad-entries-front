import React, {useState} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import userDataProps from '../../../../prop-types/user-data.prop';
import {getGroupList} from '../../../../utils/get-group-list';

function Entry({ data, count }) {
  const [detailsFlag, setDetailsFlag] = useState(false);

  const {
    objectInfo,
    person,
    company,
    account,
  } = data;

  const groups = getGroupList(objectInfo.memberOf);

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
        <td>{person.displayName}</td>
        <td>{person.email ? person.email : '-'}</td>
        <td>{person.telephoneNumber ? person.telephoneNumber : '-'}</td>
        <td>{company.name ? company.name : '-'}</td>
        <td>{company.position ? company.position : '-'}</td>
      </tr>
      <tr className="bg-light">
        <td id={objectInfo.dn} colSpan="6" className={detailsFlag ? 'collapse show' : 'collapse'}>
          <div className="px-5">
            <p>Аккаунт: <b>{account.name}</b>, создан: <b>{account.whenCreated ? moment(account.whenCreated).format('DD.MM.YYYY HH:mm') : '-'}</b></p>
            <p>Последний вход: <b>{account.lastLogon ? moment(account.lastLogon).format('DD.MM.YYYY HH:mm') : '-'}</b></p>
            <p>Доменная запись: <b>{objectInfo.dn}</b></p>
            <p>Состоит в группах:</p>
            <ol>{groups.map((groupName) => <b key={groupName}><li>{groupName}</li></b>)}</ol>
          </div>
        </td>
      </tr>
    </>
  );
}

Entry.propTypes = {
  count: PropTypes.number.isRequired,
  data: userDataProps,
};

export default Entry;
