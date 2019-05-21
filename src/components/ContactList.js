import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  }))).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

function ContactList({ contactList, onDeleteItem }) {
  return (
    <ul className="contact_list">
      {
        contactList.map(el => <ContactItem contact={el} key={el.id} onDeleteItem={onDeleteItem} />)
      }
    </ul>
  );
}

ContactList.propTypes = propTypes;

export default ContactList;
