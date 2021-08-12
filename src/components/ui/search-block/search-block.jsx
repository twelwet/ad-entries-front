import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEntriesByQuery } from '../../../store/api-actions';
import { changeSearchField } from '../../../store/action';

function SearchBlock({ searchTabs, type, field, getEntriesByQuery, onRadioClick }) {
  const [text, setText] = useState('');
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const searchFieldHandler = (evt) => {
    const {value} = evt.target;
    onRadioClick(value);
    searchRef.current.focus();
  };

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
      <div className="d-flex bd-highlight">
        {
          searchTabs.map(
            (item) => (
              <div key={item.FIELD} className="form-check m-3">
                <input
                  onChange={searchFieldHandler}
                  checked={item.FIELD === field}
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id={item.FIELD}
                  value={item.FIELD}
                />
                <label style={{cursor: 'pointer'}} className="form-check-label" htmlFor={item.FIELD}>{item.NAME}</label>
              </div>
            ),
          )
        }
      </div>
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
      <div className="text-secondary float-end p-2">Поиск записей <b>{type}</b> по атрибуту <b>{field}</b></div>
    </form>
  );
}

SearchBlock.propTypes = {
  searchTabs: PropTypes.arrayOf(PropTypes.shape({
    NAME: PropTypes.string.isRequired,
    FIELD: PropTypes.string.isRequired,
  })),
  type: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  getEntriesByQuery: PropTypes.func.isRequired,
  onRadioClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  searchTabs: state.entries.searchTabs,
  type: state.entries.type,
  field: state.entries.field,
});

const mapDispatchToProps = (dispatch) => ({
  getEntriesByQuery (type, field, query) {
    dispatch(fetchEntriesByQuery(type, field, query));
  },
  onRadioClick: (field) => {
    dispatch(changeSearchField(field));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBlock);
