import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import ErrorMessage from './ErrorMessage';

const propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  })).isRequired,
  onAddContact: PropTypes.func,
};

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phoneNumber: '',
      isNameValid: false,
      isPhoneNumberValid: false,
      isContactValid: false,
      errorMessage: {
        name: '',
        phoneNumber: '',
      },
    }
  };

  handleChangeInput = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    this.setState({
      [fieldName]: value,
    });

    this.validateField(fieldName, value);
  };

  validateField = (fieldName, value) => {
    let { isNameValid, isPhoneNumberValid, errorMessage } = this.state;

    switch(fieldName) {
      case 'name':
        isNameValid = value.match(/^[a-zA-Z0-9-_\s\.]{1,20}$/);
        errorMessage.name = isNameValid ? '' : 'Contact name is invalid';
        break;
      case 'phoneNumber':
        isPhoneNumberValid = value.match(/^\+?[0-9]{1,15}$/);
        errorMessage.phoneNumber = isPhoneNumberValid ? '': 'Phone number is invalid';
        break;
      default:
        break;
    }

    this.setState({
      errorMessage,
      isNameValid,
      isPhoneNumberValid,
      isContactValid: isNameValid && isPhoneNumberValid,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { contactList, onAddContact, history } = this.props;
    const { name, phoneNumber } = this.state;

    const newContact = {
      id: contactList[contactList.length - 1].id + 1,
      name: name,
      phoneNumber: phoneNumber,
    };

    onAddContact(newContact);
    history.push('/');
  };

  render() {
    const { name, phoneNumber, isNameValid, isPhoneNumberValid, isContactValid, errorMessage } = this.state;

    return (
      <form className="contact_form" onSubmit={this.handleSubmit}>
        <div className="contact_form-field-wrap">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChangeInput}
            className="contact_form-field"
          />
          {!isNameValid && <ErrorMessage message={errorMessage.name} />}
        </div>
        <div className="contact_form-field-wrap">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            placeholder="Phone"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChangeInput}
            className="contact_form-field"
          />
          {!isPhoneNumberValid && <ErrorMessage message={errorMessage.phoneNumber} />}
        </div>
        <div className="contact_btn-wrap">
          <Link to="/" className="contact_btn-cancel">Cancel</Link>
          <button className="contact_btn-save" disabled={!isContactValid} type="submit">Save</button>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = propTypes;

export default withRouter(ContactForm);