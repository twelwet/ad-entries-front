import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainNav from '../ui/main-nav/main-nav';
import TypeTabs from '../ui/type-tabs/type-tabs';
import { changeStatType } from '../../store/action';
import StatTabs from '../ui/stat-tabs/stat-tabs';
import StatList from '../ui/stat-list/stat-list';
import { fetchStat } from '../../store/api-actions';

function StatPage({ type, page, getStat }) {
  useEffect(() => {
    getStat(type);
  }, []);

  return (
    <>
      <MainNav page={page} />
      <TypeTabs action={changeStatType} page={page} stateField={'stat'} />
      <div className="mt-2">
        <StatTabs />
        <StatList />
      </div>
    </>
  );
}

StatPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(StatPage);
