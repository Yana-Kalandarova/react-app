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
  }

  render() {
    const { contact } = this.props;

    return (
      <li className="contact_item">
        <dl>
          <dt>{contact.name}</dt>
          <dd>{contact.phoneNumber}</dd>
        </dl>
        <DeleteBtn />
      </li>
    );
  }
}

ContactItem.propTypes = propTypes;

export default ContactItem;
