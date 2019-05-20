import React from 'react';

const ContactItem = props => (
  <li className="contact_item">
    <dl>
      <dt>{props.contact.name}</dt>
      <dd>{props.contact.phoneNumber}</dd>
    </dl>
  </li>
);

export default ContactItem;
