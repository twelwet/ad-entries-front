import React from 'react';
import PropTypes from 'prop-types';
import usersDataProps from '../../prop-types/users-data.prop';
import UserItem from '../user-item/user-item';
import { connect } from 'react-redux';
import { Status } from '../../constants';

function UsersList({ status, users }) {
  if (status === Status.PENDING) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>Список пользователей</h1>
      { users.length === 0 ? <p>Нет данных</p> : <ol>{users.map((user) => <UserItem key={user.objectInfo.dn} user={user}/>)}</ol> }
    </div>
  );
}

UsersList.propTypes = {
  status: PropTypes.string.isRequired,
  users: usersDataProps,
};

const mapStateToProps = (state) => ({
  status: state.status,
  users: state.data,
});

export {UsersList};
export default connect(mapStateToProps, null)(UsersList);
