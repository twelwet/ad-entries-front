import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsersByQuery } from '../../../store/api-actions';

function SearchBlock({ field, getUsersByQuery }) {
  const [text, setText] = useState('');

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
      <div className="d-flex flex-row">
        <input
          className="form-control"
          type="text"
          placeholder={'Введите текст и нажмите Enter'}
          minLength="3"
          value={text}
          onChange={handleText}
          required
        />
      </div>
    </form>
  );
}

SearchBlock.propTypes = {
  field: PropTypes.string.isRequired,
  getUsersByQuery: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  field: state.searchUsers.field,
});

const mapDispatchToProps = (dispatch) => ({
  getUsersByQuery (field, query) {
    dispatch(fetchUsersByQuery(field, query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock);
