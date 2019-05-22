import React from 'react';
import { Link } from 'react-router-dom';

const AddContactPage = () => (
  <div className="view_wrap">
    <h1 className="view_title">Add Contact</h1>
    <Link to="/">Go to Contact List</Link>
  </div>
);

export default AddContactPage;
