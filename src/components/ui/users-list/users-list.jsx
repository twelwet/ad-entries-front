import React from 'react';
import PropTypes from 'prop-types';
import usersDataProps from '../../../prop-types/users-data.prop';
import UserItem from '../user-item/user-item';
import Spinner from '../spinner/spinner';
import { connect } from 'react-redux';
import { Status, AppRoute } from '../../../constants';

function UsersList({ status, users }) {
  if (status === Status.IDLE) {
    return <h5 className="text-center mt-5">Начните поиск, здесь будут результаты.</h5>;
  }

  if (status === Status.PENDING) {
    return <Spinner />;
  }

  if (status === Status.FULFILLED) {
    if (users.length === 0) {
      return <h5 className="text-center mt-5">Не нашлось ни одного сопадения.</h5>;
    }

    return (
      <div>
        <h5 className="text-center mt-5">Найдено совпадений: {users.length}</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Полное имя</th>
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

  if (status === Status.REJECTED) {
    return (
      <div className="text-center mt-5">
        <h4>Что-то пошло не так.</h4>
        <a href={AppRoute.SEARCH}>Обновить страницу</a>
      </div>
    );
  }
}

UsersList.propTypes = {
  status: PropTypes.string.isRequired,
  users: usersDataProps,
};

const mapStateToProps = (state) => ({
  status: state.entries.status,
  users: state.entries.data,
});

export {UsersList};
export default connect(mapStateToProps, null)(UsersList);
