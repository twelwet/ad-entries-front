import React from 'react';
import MainNav from '../ui/main-nav/main-nav';
import SearchNav from '../ui/search-nav/search-nav';
import SearchBlock from '../ui/search-block/search-block';
import EntriesList from '../ui/entries-list/entries-list';

function SearchPage() {
  return (
    <>
      <MainNav />
      <div className="m-5">
        <SearchNav />
        <SearchBlock />
        <EntriesList />
      </div>
    </>
  );
}

export default SearchPage;
