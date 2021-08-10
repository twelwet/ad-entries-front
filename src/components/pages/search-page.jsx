import React from 'react';
import MainNav from '../ui/main-nav/main-nav';
import SearchNav from '../ui/search-nav/search-nav';
import SearchBlock from '../ui/search-block/search-block';
import UsersList from '../ui/users-list/users-list';

function SearchPage() {
  return (
    <>
      <MainNav />
      <div className="m-5">
        <SearchNav />
        <SearchBlock />
        <UsersList />
      </div>
    </>
  );
}

export default SearchPage;
