import React from 'react';
import PropTypes from 'prop-types';

import ContactForm from './ContactForm';

// TODO: remove unnecessary props
const propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  })).isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

// TODO: remove unnecessary props
const EditContactPage = ({
  contactList, id, location, match,
}) => {
  console.log(contactList);
  console.log(id);
  console.log(location);
  console.log(match);

  return (
    <div className="view_wrap">
      <h1 className="view_title">Edit Contact</h1>
      <ContactForm contactList={contactList} id={id} />
    </div>
  );
};

EditContactPage.propTypes = propTypes;

export default EditContactPage;
