import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { filterList } from '../utils/index';

import SearchBar from './SearchBar';
import ContactList from './ContactList';

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
    <div className="contact_btn-wrap">
      <Link to="/new-contact" className="contact_btn-add">Add Contact</Link>
    </div>
  </div>
);

ContactListPage.propTypes = propTypes;

export default ContactListPage;
