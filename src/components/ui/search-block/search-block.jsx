import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsersByQuery } from '../../../store/api-actions';

function SearchBlock({ field, getUsersByQuery }) {
  const [text, setText] = useState('');
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleText = (evt) => {
    const {value} = evt.target;
    setText(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getUsersByQuery(field, text);
  };

  return (
    <form
      method="GET"
      action="#"
      onSubmit={handleSubmit}
      className="m-5"
    >
      <input
        ref={searchRef}
        className="form-control p-2"
        type="text"
        placeholder={'Введите текст и нажмите Enter'}
        minLength="3"
        value={text}
        onChange={handleText}
        required
      />
      <div className="text-secondary float-end">Поиск по полю: <b>{field}</b></div>
    </form>
  );
}

SearchBlock.propTypes = {
  field: PropTypes.string.isRequired,
  getUsersByQuery: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  field: state.entries.field,
});

const mapDispatchToProps = (dispatch) => ({
  getUsersByQuery (field, query) {
    dispatch(fetchUsersByQuery(field, query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock);
