import React from 'react';
import ContactItem from './ContactItem';

const ContactList = props => (
  <ul className="contact_list">
    {
      props.list.map(el => <ContactItem contact={el} key={el.name} />)
    }
  </ul>
);

export default ContactList;
