import React from 'react';
import PropTypes from 'prop-types';

import ContactForm from './ContactForm';

const propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  })).isRequired,
  onEditContact: PropTypes.func.isRequired,
};

const EditContactPage = ({ contactList, onEditContact }) => (
  <div className="view_wrap">
    <h1 className="view_title">Edit Contact</h1>
    <ContactForm contactList={contactList} onUpdateContact={onEditContact} />
  </div>
);

EditContactPage.propTypes = propTypes;

export default EditContactPage;
