import React from 'react';
import ContactInfo from './ContactInfo';

const ContactItem = props => (
  <li className="contact_item">
    <ContactInfo contact={props.contact} />
  </li>
);

export default ContactItem;
