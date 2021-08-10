import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSearchField } from '../../../store/action';

function SearchNav({ searchTabs, field, onTabClick }) {
  return (
    <ul className="nav nav-tabs">
      {
        searchTabs.map(
          (item) => (
            <li key={item.FIELD} className="nav-item">
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  const {value} = evt.target;
                  onTabClick(value);
                }}
                className={item.FIELD === field ? 'nav-link active' : 'nav-link'}
                value={item.FIELD}
              >
                {item.NAME}
              </button>
            </li>
          ),
        )
      }
    </ul>
  );
}

SearchNav.propTypes = {
  searchTabs: PropTypes.arrayOf(PropTypes.shape({
    NAME: PropTypes.string.isRequired,
    FIELD: PropTypes.string.isRequired,
  })),
  field: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  searchTabs: state.entries.searchTabs,
  field: state.entries.field,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick: (field) => {
    dispatch(changeSearchField(field));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchNav);
