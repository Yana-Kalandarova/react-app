import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchContact } from '../actions';

const propTypes = {
  onSearchContact: PropTypes.func.isRequired,
};
const SearchBar = ({ onSearchContact }) => {
  let input;

  return (
    <input
      ref={(node) => { input = node; }}
      type="search"
      placeholder="Search"
      onChange={() => onSearchContact(input.value)}
      className="contact_search-field"
    />
  );
};

SearchBar.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  onSearchContact: value => dispatch(searchContact(value)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
