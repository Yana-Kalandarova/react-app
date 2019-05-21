import React from 'react';
import PropTypes from 'prop-types';

import deleteIcon from '../assets/delete-icon.svg';

const propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

function DeleteButton({ onDeleteItem, id }) {
  return (
    <button className="contact_btn-delete" type="button" onClick={onDeleteItem.bind(this, id)}>
      <svg><use xlinkHref={`#${deleteIcon.id}`} /></svg>
    </button>
  );
}

DeleteButton.propTypes = propTypes;

export default DeleteButton;
