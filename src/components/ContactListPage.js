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
  onDeleteContact: PropTypes.func.isRequired,
  onSearchContact: PropTypes.func.isRequired,
};

const ContactListPage = ({ state, onDeleteContact, onSearchContact }) => (
  <div className="view_wrap">
    <h1 className="view_title">Contact List</h1>
    <SearchBar onSearchContact={onSearchContact} search={state.search} />
    <ContactList contactList={filterList(state.contactList, state.search)} onDeleteContact={onDeleteContact} />
  </div>
);

ContactListPage.propTypes = propTypes;

export default ContactListPage;
