import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onSearchContact: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

const SearchBar = ({ onSearchContact, search }) => (
  <input
    type="search"
    placeholder="Search"
    value={search}
    onChange={onSearchContact}
    className="search_field"
  />
);

SearchBar.propTypes = propTypes;

export default SearchBar;
