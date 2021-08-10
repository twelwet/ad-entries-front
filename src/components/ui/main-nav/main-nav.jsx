import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppRoute, Type } from '../../../constants';
import { changeEntriesType } from '../../../store/action';

const navItems = [{
  name: 'Пользователи',
  type: Type.USER,
}, {
  name: 'Группы',
  type: Type.GROUP,
}, {
  name: 'Юниты',
  type: Type.OU,
}];

function MainNav({ type, onTabClick }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href={AppRoute.SEARCH}>Каталог AD-записей</a>
        <div className="navbar-nav">
          {
            navItems.map(
              (item) => (
                <button
                  key={item.type}
                  onClick={(evt) => {
                    evt.preventDefault();
                    const {value} = evt.target;
                    onTabClick(value);
                  }}
                  className={item.type === type ? 'btn btn-link nav-link active' : 'btn btn-link nav-link'}
                  value={item.type}
                >
                  {item.name}
                </button>
              ),
            )
          }
        </div>
      </div>
    </nav>
  );
}

MainNav.propTypes = {
  type: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  type: state.entries.type,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick: (type) => {
    dispatch(changeEntriesType(type));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
