import React from 'react';
import PropTypes from 'prop-types';
import usersDataProps from '../../../prop-types/users-data.prop';
import UserItem from '../user-item/user-item';
import Spinner from '../spinner/spinner';
import { connect } from 'react-redux';
import { Status } from '../../../constants';

function UsersList({ status, users }) {
  if (status === Status.IDLE) {
    return <h4 className="text-center mt-5">Начните поиск</h4>;
  }

  if (status === Status.PENDING) {
    return <Spinner />;
  }

  if (status === Status.FULFILLED) {
    return (
      <div>
        <h4 className="text-center mt-5">Найдено {users.length} совпадений</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Фамилия</th>
              <th scope="col">Имя</th>
              <th scope="col">Email</th>
              <th scope="col">Телефон</th>
              <th scope="col">Организация</th>
              <th scope="col">Должность</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => <UserItem key={user.objectInfo.dn} user={user} count={index + 1}/>)}
          </tbody>
        </table>
      </div>
    );
  }

  if (status === Status.FULFILLED) {
    return <h4 className="text-center mt-5">Что-то пошло не так.</h4>;
  }
}

UsersList.propTypes = {
  status: PropTypes.string.isRequired,
  users: usersDataProps,
};

const mapStateToProps = (state) => ({
  status: state.searchUsers.status,
  users: state.searchUsers.data,
});

export {UsersList};
export default connect(mapStateToProps, null)(UsersList);
