import React from 'react';
import PropTypes from 'prop-types';
import MainNav from '../ui/main-nav/main-nav';
import TypeTabs from '../ui/type-tabs/type-tabs';
import SearchBlock from '../ui/search-block/search-block';
import EntriesList from '../ui/entries-list/entries-list';
import { changeEntriesType } from '../../store/action';

function SearchPage({ page }) {
  return (
    <>
      <MainNav page={page} />
      <TypeTabs action={changeEntriesType} page={page} stateField={'entries'}/>
      <div className="m-2">
        <SearchBlock />
        <EntriesList />
      </div>
    </>
  );
}

SearchPage.propTypes = {
  page: PropTypes.string.isRequired,
};

export default SearchPage;
