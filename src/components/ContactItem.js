import React from 'react';
import PropTypes from 'prop-types';

const props = {
  contact: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  })).isRequired,
};

const ContactItem = ({ contact }) => (
  <li className="contact_item">
    <dl>
      <dt>{contact.name}</dt>
      <dd>{contact.phoneNumber}</dd>
    </dl>
  </li>
);

ContactItem.propTypes = props;

export default ContactItem;
