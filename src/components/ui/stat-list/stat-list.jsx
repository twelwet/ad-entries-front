import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppRoute, Status, DataAdapterSet } from '../../../constants';
import Spinner from '../spinner/spinner';
import StatHead from './stat-head/stat-head';
import StatItem from './stat-item/stat-item';

function StatList({ status, type, dataAdapterSetName }) {
  if (status === Status.PENDING) {
    return <Spinner />;
  }

  if (status === Status.FULFILLED) {
    return(
      <div className="m-5">
        {DataAdapterSet[type][dataAdapterSetName].map((dataAdapter) => (
          <table key={dataAdapter} className="table">
            <StatHead nameOfDataAdapter={dataAdapter} />
            <tbody>
              <StatItem nameOfDataAdapter={dataAdapter} />
            </tbody>
          </table>
        ))}
      </div>
    );
  }

  if (status === Status.REJECTED || status === Status.IDLE) {
    return (
      <div className="text-center mt-5">
        <h4>Что-то пошло не так.</h4>
        <a href={AppRoute.STAT}>Обновить страницу</a>
      </div>
    );
  }
}

StatList.propTypes = {
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  status: state.stat.status,
  type: state.stat.type,
  dataAdapterSetName: state.stat.dataAdapterSetName,
});

export default connect(mapStateToProps, null)(StatList);
