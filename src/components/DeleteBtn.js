import React from 'react';
import PropTypes from 'prop-types';
import deleteIcon from '../assets/delete-icon.svg';

const propTypes = {
  deleteItem: PropTypes.func.isRequired,
};


class DeleteBtn extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { deleteItem } = this.props;

    deleteItem();
  }

  render() {
    return (
      <button className="contact_btn-delete" type="button" onClick={this.handleClick}>
        <svg><use xlinkHref={`#${deleteIcon.id}`} /></svg>
      </button>
    );
  }
}

DeleteBtn.propTypes = propTypes;

export default DeleteBtn;
