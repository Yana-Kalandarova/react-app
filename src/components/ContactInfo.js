import React from 'react';

const ContactInfo = props => (
  <dl>
    <dt>{props.contact.name}</dt>
    <dd>{props.contact.phoneNumber}</dd>
  </dl>
);

export default ContactInfo;
