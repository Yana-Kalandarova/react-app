import React from 'react';
import PropTypes from 'prop-types';

import deleteIcon from '../assets/delete-icon.svg';

const propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const DeleteButton = ({ onDeleteContact, id }) => (
  <button className="contact_btn-delete" type="button" onClick={onDeleteContact.bind(this, id)}>
    <svg><use xlinkHref={`#${deleteIcon.id}`} /></svg>
  </button>
);

DeleteButton.propTypes = propTypes;

export default DeleteButton;
