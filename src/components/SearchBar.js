import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchContact } from '../actions';

const propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchContact: PropTypes.func.isRequired,
};
const SearchBar = ({ searchValue, onSearchContact }) => {
  let input;

  return (
    <input
      ref={(node) => { input = node; }}
      type="search"
      placeholder="Search"
      value={searchValue}
      onChange={() => onSearchContact(input.value)}
      className="contact_search-field"
    />
  );
};

SearchBar.propTypes = propTypes;

const mapStateToProps = state => ({
  searchValue: state.searchValue,
});

export default connect(mapStateToProps, { onSearchContact: searchContact })(SearchBar);
