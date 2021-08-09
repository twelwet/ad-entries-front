import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchField } from '../../../constants';
import {changeSearchField} from '../../../store/action';

const userSearchTab = [{
  name: 'ФИО',
  searchField: SearchField.User.NAME,
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

function NavBlock({ field, onTabClick }) {
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

NavBlock.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBlock);
