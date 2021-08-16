import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppRoute, Status, DataAdapterSet, DataAdapterSetName, Type } from '../../../constants';
import statDataProp from '../../../prop-types/stat-data.prop';
import Spinner from '../spinner/spinner';
import StatHead from './stat-head/stat-head';
import StatItem from './stat-item/stat-item';

function StatList({ data, status, type, dataAdapterSetName }) {
  if (status === Status.PENDING) {
    return <Spinner />;
  }
  /*eslint-disable react/no-array-index-key*/
  if (status === Status.FULFILLED) {
    return(
      <div className="m-5">
        {DataAdapterSet[type][dataAdapterSetName].map((dataAdapter) => (
          <table key={dataAdapter} className="table">
            <StatHead nameOfDataAdapter={dataAdapter} />
            <tbody>
              {dataAdapterSetName === DataAdapterSetName[Type.EMAILS].TOP_VOLUME ? data.topBoxes.map((item, index) => (
                <StatItem key={index} nameOfDataAdapter={dataAdapter} data={item} count={index + 1} />
              )) : <StatItem nameOfDataAdapter={dataAdapter} data={data} count={1} />}
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
  data: statDataProp,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.stat.data,
  status: state.stat.status,
  type: state.stat.type,
  dataAdapterSetName: state.stat.dataAdapterSetName,
});

export default connect(mapStateToProps, null)(StatList);
