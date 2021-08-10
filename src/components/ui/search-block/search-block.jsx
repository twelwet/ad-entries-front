import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEntriesByQuery } from '../../../store/api-actions';

function SearchBlock({ type, field, getEntriesByQuery }) {
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
    getEntriesByQuery(type, field, text);
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
      <div className="text-secondary float-end">Поиск записей <b>{type}</b> по атрибуту <b>{field}</b></div>
    </form>
  );
}

SearchBlock.propTypes = {
  type: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  getEntriesByQuery: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  type: state.entries.type,
  field: state.entries.field,
});

const mapDispatchToProps = (dispatch) => ({
  getEntriesByQuery (type, field, query) {
    dispatch(fetchEntriesByQuery(type, field, query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock);
