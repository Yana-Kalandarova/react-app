import React from 'react';
import { connect } from 'react-redux';
import { searchContact } from '../actions';

const SearchBar = ({ dispatch }) => {
  let input;

  return (
    <input
      ref={(node) => { input = node; }}
      type="search"
      placeholder="Search"
      onChange={() => dispatch(searchContact(input.value))}
      className="contact_search-field"
    />
  );
};

export default connect()(SearchBar);
