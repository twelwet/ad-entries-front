import React from 'react';
import SearchNav from '../ui/search-nav/search-nav';
import SearchBlock from '../ui/search-block/search-block';
import UsersList from '../ui/users-list/users-list';

function SearchPage() {
  return (
    <div className="m-5">
      <SearchNav />
      <SearchBlock />
      <UsersList />
    </div>
  );
}

export default SearchPage;
