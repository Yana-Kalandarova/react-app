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
        <Switch>
          <Route exact path="/" render={
            () => <ContactListPage searchValue={searchValue} contactList={contactList} onDeleteContact={this.handleDeleteContact} onSearchContact={this.handleSearchContact} />
          } />
          <Route path="/new-contact" render={
            () => <AddContactPage contactList={contactList} onAddContact={this.handleAddContact} />
          } />
          <Route path="/edit-contact/:id" render={
            // TODO: remove unnecessary props
            ({ match, location }) => <EditContactPage contactList={contactList} id={match.params.id} location={location} match={match} />
          } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
