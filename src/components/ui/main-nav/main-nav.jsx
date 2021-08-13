import React from 'react';
import PropTypes from 'prop-types';
import { AppRoute } from '../../../constants';

function MainNav({ page }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href={AppRoute.MAIN}>Каталог AD-записей</a>
        <div className="navbar-nav navbar-collapse">
          <a className={page === AppRoute.SEARCH ? 'nav-link nav-item active' : 'nav-link nav-item'} href={AppRoute.SEARCH}>Поиск</a>
          <a className={page === AppRoute.STAT ? 'nav-link nav-item active' : 'nav-link nav-item'} href={AppRoute.STAT}>Статистика</a>
        </div>
      </div>
    </nav>
  );
}

MainNav.propTypes = {
  page: PropTypes.string.isRequired,
};

export default MainNav;
