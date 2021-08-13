import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavTabs } from '../../../constants';

function MainTabs({ type, onTabClick, action, page }) {
  const tabs = NavTabs[page];
  return (
    <ul className="nav nav-tabs justify-content-left mt-2">
      {tabs.map((item) => (
        <li key={item.type} className="nav-item">
          <button
            onClick={(evt) => {
              evt.preventDefault();
              const {value} = evt.target;
              onTabClick(value, action);
            }}
            className={item.type === type ? 'btn btn-link nav-link active' : 'btn btn-link nav-link'}
            value={item.type}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

MainTabs.propTypes = {
  type: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { stateField }) => ({
  type: state[stateField].type,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick: (type, action) => {
    dispatch(action(type));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainTabs);
