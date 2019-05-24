import React from 'react';
import PropTypes from 'prop-types';

import ContactForm from './ContactForm';

const propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  })).isRequired,
  onAddContact: PropTypes.func.isRequired,
};

const AddContactPage = ({ contactList, onAddContact }) => (
  <div className="view_wrap">
    <h1 className="view_title">Add Contact</h1>
    <ContactForm contactList={contactList} onAddContact={onAddContact} />
  </div>
);

AddContactPage.propTypes = propTypes;

export default AddContactPage;
