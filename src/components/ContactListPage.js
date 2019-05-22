import React from 'react';
import PropTypes from 'prop-types';
import { filterList } from '../utils/index';

import SearchBar from './SearchBar';
import ContactList from './ContactList';

import '../styles/app.scss';

const propTypes = {
  state: PropTypes.objectOf(PropTypes.shape({
    search: PropTypes.string,
    contactList: PropTypes.array,
  })).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

const ContactListPage = ({ state, onDeleteItem, onSearch }) => (
  <div className="view_wrap">
    <h1 className="view_title">Contact List</h1>
    <SearchBar onSearch={onSearch} search={state.search} />
    <ContactList contactList={filterList(state.contactList, state.search)} onDeleteItem={onDeleteItem} />
  </div>
);

ContactListPage.propTypes = propTypes;

export default ContactListPage;
