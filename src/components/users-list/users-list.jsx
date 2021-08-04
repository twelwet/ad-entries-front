import React, {useState, useEffect} from 'react';
import UserItem from '../user-item/user-item';

const apiUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

const query = 'name/Акимов';

function UsersList() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/users/${query}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return (
      <div>
        <p>Что-то пошло не так...</p>
        <a href="/">Попробовать еще</a>
      </div>
    );
  }

  return (
    <div>
      <h1>Список пользователей</h1>
      {
        isLoaded
          ? (
            <ol>{users.map((user) => <UserItem key={user.objectInfo.dn} user={user}/>)}</ol>
          ) : (
            <p>Идет загрузка...</p>
          )
      }
    </div>
  );
}

export default UsersList;
