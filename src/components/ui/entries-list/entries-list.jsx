import React from 'react';
import PropTypes from 'prop-types';
import usersDataProps from '../../../prop-types/users-data.prop';
import ListHead from './list-head/list-head';
import Entry from './entry/entry';
import Spinner from '../spinner/spinner';
import { connect } from 'react-redux';
import { Status, AppRoute } from '../../../constants';

function EntriesList({ status, data }) {
  if (status === Status.IDLE) {
    return <h5 className="text-center mt-5">Начните поиск, здесь будут результаты.</h5>;
  }

  if (status === Status.PENDING) {
    return <Spinner />;
  }

  if (status === Status.FULFILLED) {
    if (data.length === 0) {
      return <h5 className="text-center mt-5">Не нашлось ни одного сопадения.</h5>;
    }

    return (
      <div>
        <h5 className="text-center mt-5">Найдено совпадений: {data.length}</h5>
        <table className="table">
          <ListHead />
          <tbody>
            {data.map((entry, index) => <Entry key={entry.objectInfo.dn} data={entry} count={index + 1}/>)}
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

EntriesList.propTypes = {
  status: PropTypes.string.isRequired,
  data: usersDataProps,
};

const mapStateToProps = (state) => ({
  status: state.entries.status,
  data: state.entries.data,
});

export {EntriesList};
export default connect(mapStateToProps, null)(EntriesList);
