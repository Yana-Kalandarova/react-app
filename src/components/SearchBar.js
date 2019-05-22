import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

const SearchBar = ({ onSearch, search }) => (
  <input
    type="search"
    placeholder="Search"
    value={search}
    onChange={onSearch}
    className="search_field"
  />
);

SearchBar.propTypes = propTypes;

export default SearchBar;