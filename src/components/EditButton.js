import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import editIcon from '../assets/edit-icon.svg';

const propTypes = {
  id: PropTypes.number.isRequired,
};

const EditButton = ({ id }) => (
  <Link to={`/edit-contact/${id}`} className="contact_btn-edit">
    <svg><use xlinkHref={`#${editIcon.id}`} /></svg>
  </Link>
);

EditButton.propTypes = propTypes;

export default EditButton;
