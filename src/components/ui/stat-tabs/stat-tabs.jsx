import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StatTabs as Tabs } from '../../../constants';
import { changeStatDataAdapterSet } from '../../../store/action';

function StatTabs({ type, dataAdapterSetName, onStatTabClick }) {
  const changeTabHandler = (evt) => {
    const {value} = evt.target;
    onStatTabClick(value);
  };

  return (
    <ul className="nav nav-tabs justify-content-center">
      {Tabs[type].map((item) => (
        <li key={item.adapterSet} className="nav-item">
          <button
            onClick={changeTabHandler}
            className={item.adapterSet === dataAdapterSetName ? 'btn btn-link nav-link active' : 'btn btn-link nav-link'}
            value={item.adapterSet}
            disabled={item.adapterSet === dataAdapterSetName}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

StatTabs.propTypes = {
  type: PropTypes.string.isRequired,
  dataAdapterSetName: PropTypes.string.isRequired,
  onStatTabClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  type: state.stat.type,
  dataAdapterSetName: state.stat.dataAdapterName,
});

const mapDispatchToProps = (dispatch) => ({
  onStatTabClick: (dataAdapterSetName) => {
    dispatch(changeStatDataAdapterSet(dataAdapterSetName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StatTabs);
