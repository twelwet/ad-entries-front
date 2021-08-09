import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchField } from '../../../constants';
import {changeSearchField} from '../../../store/action';

const userSearchTab = [{
  name: 'Полное имя',
  searchField: SearchField.User.FULL_NAME,
}, {
  name: 'Телефон',
  searchField: SearchField.User.TEL,
}, {
  name: 'Организация',
  searchField: SearchField.User.COMPANY,
}, {
  name: 'Никнейм',
  searchField: SearchField.User.NICK_NAME,
}];

function SearchNav({ field, onTabClick }) {
  return (
    <ul className="nav nav-tabs">
      {
        userSearchTab.map(
          (item) => (
            <li key={item.searchField} className="nav-item">
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  const {value} = evt.target;
                  onTabClick(value);
                }}
                className={item.searchField === field ? 'nav-link active' : 'nav-link'}
                value={item.searchField}
              >
                {item.name}
              </button>
            </li>
          ),
        )
      }
    </ul>
  );
}

SearchNav.propTypes = {
  field: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  field: state.searchUsers.field,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick: (field) => {
    dispatch(changeSearchField(field));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchNav);
