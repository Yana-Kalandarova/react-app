import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import dataList from '../data';

import ContactListPage from './ContactListPage';
import AddContactPage from './AddContactPage';
import EditContactPage from './EditContactPage';

import '../styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: dataList,
      searchValue: '',
    };
  }

  handleDeleteContact = (contactId) => {
    const { contactList } = this.state;

    const deletedIndex = contactList.findIndex(contact => contact.id === contactId);
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

  handleEditContact = (contact) => {
    const { contactList } = this.state;
    const contactId = contact.id;
    const editedIndex = contactList.findIndex(contact => contact.id === contactId);;

    contactList.splice(editedIndex, 1, contact);

    this.setState({
      contactList,
    });
  };

  render() {
    const { contactList, searchValue } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={
            () => <ContactListPage searchValue={searchValue} contactList={contactList} onDeleteContact={this.handleDeleteContact} onSearchContact={this.handleSearchContact} />
          } />
          <Route path="/new-contact" render={
            () => <AddContactPage contactList={contactList} onAddContact={this.handleAddContact} />
          } />
          <Route path="/edit-contact/:contactId" render={
            () => <EditContactPage contactList={contactList} onEditContact={this.handleEditContact} />
          } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
