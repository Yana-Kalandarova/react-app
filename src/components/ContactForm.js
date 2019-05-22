import React from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const a = 'test';

  return (
    <form className="contact_form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        placeholder="Name"
        id="name"
        name="name"
        className="contact_form-field"
      />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="tel"
        placeholder="Phone"
        id="phoneNumber"
        name="phoneNumber"
        className="contact_form-field"
      />
      <div className="contact_btn-wrap">
        <Link to="/" className="contact_btn-cancel">Cancel</Link>
        <Link to="/" className="contact_btn-save">Save</Link>
      </div>
    </form>
  );
};

export default ContactForm;
