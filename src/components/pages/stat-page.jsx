import React from 'react';
import PropTypes from 'prop-types';
import MainNav from '../ui/main-nav/main-nav';
import MainTabs from '../ui/main-tabs/main-tabs';
import { changeStatType } from '../../store/action';

function StatPage({ page }) {
  return (
    <>
      <MainNav page={page} />
      <MainTabs action={changeStatType} page={page} stateField={'stat'} />
      <div className="m-2">
        <div>В разработке</div>
      </div>
    </>
  );
}

StatPage.propTypes = {
  page: PropTypes.string.isRequired,
};

export default StatPage;
