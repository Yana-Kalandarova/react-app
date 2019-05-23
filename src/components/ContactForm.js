import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import Error from './Error';

const propTypes = {
  state: PropTypes.objectOf(PropTypes.shape({
    search: PropTypes.string,
    contactList: PropTypes.array,
  })).isRequired,
  onAddContact: PropTypes.func.isRequired,
};

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phoneNumber: '',
    }
  };

  handleChangeInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    this.setState({
      [field]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { state, onAddContact, history } = this.props;

    const newContact = {
      id: state.contactList[state.contactList.length - 1].id + 1,
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
    };

    onAddContact(newContact);
    history.push('/');
  };

  render() {
    return (
      <form className="contact_form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChangeInput}
          className="contact_form-field"
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          placeholder="Phone"
          id="phoneNumber"
          name="phoneNumber"
          value={this.state.phoneNumber}
          onChange={this.handleChangeInput}
          className="contact_form-field"
        />
        <div className="contact_btn-wrap">
          <Link to="/" className="contact_btn-cancel">Cancel</Link>
          <button className="contact_btn-save" type="submit">Save</button>
        </div>
      </form>
    );
  }
};

ContactForm.propTypes = propTypes;

export default withRouter(ContactForm);
