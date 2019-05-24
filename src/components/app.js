import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import dataList from '../data';

import ContactListPage from './ContactListPage';
import AddContactPage from './AddContactPage';

import '../styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: dataList,
      searchValue: '',
    };
  }

  handleDeleteContact = (id) => {
    const { contactList } = this.state;

    const deletedIndex = contactList.findIndex(contact => contact.id === id);
    contactList.splice(deletedIndex, 1);

    this.setState({
      contactList,
    });
  };

  handleSearchContact = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleAddContact = (contact) => {
    const { contactList } = this.state;

    contactList.push(contact);

    this.setState({
      contactList,
    });
  };

  render() {
    const { contactList, searchValue } = this.state;

    return (
      <BrowserRouter>
        <Route exact path="/" render={
          () => <ContactListPage searchValue={searchValue} contactList={contactList} onDeleteContact={this.handleDeleteContact} onSearchContact={this.handleSearchContact} />
        } />
        <Route path="/new-contact" render={
          () => <AddContactPage contactList={contactList} onAddContact={this.handleAddContact} />
        } />
      </BrowserRouter>
    );
  }
}

export default App;
