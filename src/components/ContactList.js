import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  }))).isRequired,
};

const ContactList = ({ list }) => (
  <ul className="contact_list">
    {
      list.map(el => <ContactItem contact={el} key={el.id} />)
    }
  </ul>
);

ContactList.propTypes = propTypes;

export default ContactList;
