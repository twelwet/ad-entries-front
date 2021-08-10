import React from 'react';
import { AppRoute } from '../../../constants';

function MainNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href={AppRoute.SEARCH}>Каталог AD-записей</a>
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href={AppRoute.SEARCH}>Пользователи</a>
          <a className="nav-link disabled" aria-disabled="true" href="#">Группы</a>
          <a className="nav-link disabled" aria-disabled="true" href="#">Юниты</a>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
