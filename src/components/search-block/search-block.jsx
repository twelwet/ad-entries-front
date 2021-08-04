import React from 'react';

function SearchBlock() {
  return (
    <form>
      <input
        type='text'
        placeholder='Поиск'
        minLength='5'
      />
      <button type='submit'>Найти</button>
    </form>
  );
}

export default SearchBlock;
