import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <div>
      <div className='ui segment'>
        <form className='ui form' onSubmit={onFormSubmit}>
          <div className='field'>
            <label>Keyword Search</label>
            <input
              type='text'
              placeholder='Enter search term...'
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
