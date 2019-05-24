import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { filterList } from '../utils/index';

import SearchBar from './SearchBar';
import ContactList from './ContactList';

const propTypes = {
  searchValue: PropTypes.string.isRequired,
  contactList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onSearchContact: PropTypes.func.isRequired,
};

const ContactListPage = ({
  searchValue, contactList, onDeleteContact, onSearchContact,
}) => (
  <div className="view_wrap">
    <h1 className="view_title">Contact List</h1>
    <SearchBar onSearchContact={onSearchContact} searchValue={searchValue} />
    <ContactList contactList={filterList(contactList, searchValue)} onDeleteContact={onDeleteContact} />
    <div className="contact_btn-wrap">
      <Link to="/new-contact" className="contact_btn-add">Add Contact</Link>
    </div>
  </div>
);

ContactListPage.propTypes = propTypes;

export default ContactListPage;
