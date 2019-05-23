import React from 'react';
import PropTypes from 'prop-types';

import ContactForm from './ContactForm';

const propTypes = {
  state: PropTypes.objectOf(PropTypes.shape({
    search: PropTypes.string,
    contactList: PropTypes.array,
  })).isRequired,
  onAddContact: PropTypes.func.isRequired,
};

const AddContactPage = ({ state, onAddContact }) => (
  <div className="view_wrap">
    <h1 className="view_title">Add Contact</h1>
    <ContactForm state={state} onAddContact={onAddContact} />
  </div>
);

AddContactPage.propTypes = propTypes;

export default AddContactPage;
