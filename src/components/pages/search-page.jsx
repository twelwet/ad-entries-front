import React from 'react';
import NavBlock from '../ui/nav-block/nav-block';
import SearchBlock from '../ui/search-block/search-block';
import UsersList from '../ui/users-list/users-list';

function SearchPage() {
  return (
    <div className="m-5">
      <NavBlock />
      <SearchBlock />
      <UsersList />
    </div>
  );
}

export default SearchPage;
