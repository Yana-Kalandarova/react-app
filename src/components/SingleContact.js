import React from 'react';
import { Link } from 'react-router-dom';

const SingleContact = () => {
return (
  <form className="contact_form">
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      placeholder="Name"
      id="name"
      name="name"
      className="contact_field"
    />
    <label htmlFor="phoneNumber">Phone Number:</label>
    <input
      type="tel"
      placeholder="Phone"
      id="phoneNumber"
      name="phoneNumber"
      className="contact_field"
    />
    <Link to="/" className="contact_btn-cancel" onClick={(e) => {console.log(e)}}>Cancel</Link>
    <Link to="/" className="contact_btn-save" onClick={(e) => {console.log(e)}}>Save</Link>
  </form>
)
};

export default SingleContact;
