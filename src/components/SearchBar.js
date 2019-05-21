import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

function SearchBar({ onSearch, search }) {
  return (
    <input
      type="search"
      placeholder="Search"
      value={search}
      onChange={onSearch}
    />
  );
}

SearchBar.propTypes = propTypes;

export default SearchBar;
