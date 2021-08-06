import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchUsersByMailQuery} from '../../store/api-actions';

function SearchBlock({ getUsersByMailQuery }) {
  const [text, setText] = useState('');

  const handleText = (evt) => {
    const {value} = evt.target;
    setText(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getUsersByMailQuery(text);
  };

  return (
    <form
      method="GET"
      action="#"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Поиск"
        minLength="5"
        value={text}
        onChange={handleText}
      />
      <button type='submit'>Найти</button>
    </form>
  );
}

SearchBlock.propTypes = {
  getUsersByMailQuery: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getUsersByMailQuery (query) {
    dispatch(fetchUsersByMailQuery(query));
  },
});

export default connect(null, mapDispatchToProps)(SearchBlock);
