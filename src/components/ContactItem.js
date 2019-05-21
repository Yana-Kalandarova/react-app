import React from 'react';
import PropTypes from 'prop-types';
import DeleteBtn from './DeleteBtn';

const propTypes = {
  contact: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  })).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

function ContactItem({ contact, onDeleteItem }) {
  return (
    <li className="contact_item">
      <dl>
        <dt>{contact.name}</dt>
        <dd>{contact.phoneNumber}</dd>
      </dl>
      <DeleteBtn onDeleteItem={onDeleteItem} id={contact.id} />
    </li>
  );
}

ContactItem.propTypes = propTypes;

export default ContactItem;
