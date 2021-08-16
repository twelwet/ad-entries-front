import React from 'react';
import PropTypes from 'prop-types';
import entriesDataProp from '../../../prop-types/entries-data.prop';
import ListHead from './list-head/list-head';
import Entry from './entry/entry';
import Spinner from '../spinner/spinner';
import { connect } from 'react-redux';
import { Status, AppRoute, EntriesTab } from '../../../constants';
import { changeEntriesDataAdapter } from '../../../store/action';

function EntriesList({ type, status, data, dataAdapterName, onTabClick }) {
  const changeTabHandler = (evt) => {
    const {value} = evt.target;
    onTabClick(value);
  };

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
      <div className="m-5">
        <h5 className="text-center mt-5">Найдено совпадений: {data.length}</h5>
        <ul className="nav nav-tabs">
          {EntriesTab[type].map((item, index) => (
            <li key={item.name} className="nav-item">
              <button
                onClick={changeTabHandler}
                value={item.adapter}
                className={item.adapter === dataAdapterName ? 'nav-link active' : 'nav-link'}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <table className="table">
          <ListHead stateField={'entries'} />
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
  type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  data: entriesDataProp,
  dataAdapterName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  type: state.entries.type,
  status: state.entries.status,
  data: state.entries.data,
  dataAdapterName: state.entries.dataAdapterName,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick: (dataAdapterName) => {
    dispatch(changeEntriesDataAdapter(dataAdapterName));
  },
});

export {EntriesList};
export default connect(mapStateToProps, mapDispatchToProps)(EntriesList);
