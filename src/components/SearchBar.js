import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onSearchContact: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

const SearchBar = ({ onSearchContact, searchValue }) => (
  <input
    type="search"
    placeholder="Search"
    value={searchValue}
    onChange={onSearchContact}
    className="contact_search-field"
  />
);

SearchBar.propTypes = propTypes;

export default SearchBar;
