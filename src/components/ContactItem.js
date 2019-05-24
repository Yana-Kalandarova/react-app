import React from 'react';
import PropTypes from 'prop-types';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const ContactItem = ({ contact, onDeleteContact }) => (
  <li className="contact_list-item">
    <dl>
      <dt>{contact.name}</dt>
      <dd>{contact.phoneNumber}</dd>
    </dl>
    <EditButton id={contact.id} />
    <DeleteButton onDeleteContact={onDeleteContact} id={contact.id} />
  </li>
);

ContactItem.propTypes = propTypes;

export default ContactItem;
