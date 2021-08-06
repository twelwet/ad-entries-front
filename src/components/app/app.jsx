import React from 'react';
import SearchBlock from '../search-block/search-block';
import UsersList from '../users-list/users-list';

function App() {
  // useEffect(() => {
  //   fetch(`${apiUrl}/users/${query}`, {
  //     method: 'GET',
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setIsLoaded(true);
  //     })
  //     .catch((err) => {
  //       setIsError(true);
  //     });
  // }, []);

  return (
    <div>
      <SearchBlock />
      <UsersList />
    </div>
  );
}

export default App;
