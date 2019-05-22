import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

const propTypes = {
  contact: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  })).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

const ContactItem = ({ contact, onDeleteItem }) => (
  <li className="contact_item">
    <dl>
      <dt>{contact.name}</dt>
      <dd>{contact.phoneNumber}</dd>
    </dl>
    <DeleteButton onDeleteItem={onDeleteItem} id={contact.id} />
  </li>
);

ContactItem.propTypes = propTypes;

export default ContactItem;
