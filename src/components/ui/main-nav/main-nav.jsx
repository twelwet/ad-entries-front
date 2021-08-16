import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../constants';
import browserHistory from '../../../browser-history';
import { fetchStat } from '../../../store/api-actions';

function MainNav({ type, page, getStat }) {
  const getStatHandler = (evt) => {
    evt.preventDefault();
    getStat(type);
    browserHistory.push(AppRoute.STAT);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={AppRoute.MAIN}>Каталог AD-записей</Link>
        <div className="navbar-nav navbar-collapse">
          <Link className={page === AppRoute.SEARCH ? 'nav-link nav-item active' : 'nav-link nav-item'} to={AppRoute.SEARCH}>Поиск</Link>
          <Link
            onClick={getStatHandler}
            className={page === AppRoute.STAT ? 'nav-link nav-item active' : 'nav-link nav-item'}
            to={AppRoute.STAT}
          >
            Статистика
          </Link>
        </div>
      </div>
    </nav>
  );
}

MainNav.propTypes = {
  type: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  getStat: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  type: state.stat.type,
});

const mapDispatchToProps = (dispatch) => ({
  getStat (type) {
    dispatch(fetchStat(type));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
