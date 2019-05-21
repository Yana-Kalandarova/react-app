import React from 'react';
import PropTypes from 'prop-types';
import DeleteBtn from './DeleteBtn';

const propTypes = {
  contact: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  })).isRequired,
};

class ContactItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDeleted: false,
    };

    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem() {
    this.setState(state => ({
      isDeleted: !state.isDeleted,
    }));
  }

  render() {
    const { contact } = this.props;
    const { isDeleted } = this.state;

    if (isDeleted) {
      return null;
    }

    return (
      <li className="contact_item">
        <dl>
          <dt>{contact.name}</dt>
          <dd>{contact.phoneNumber}</dd>
        </dl>
        <DeleteBtn deleteItem={this.deleteItem} />
      </li>
    );
  }
}

ContactItem.propTypes = propTypes;

export default ContactItem;
