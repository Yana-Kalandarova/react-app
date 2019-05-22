import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import dataList from '../data';

import ContactListPage from './ContactListPage';

import '../styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: dataList,
      search: '',
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
      search: e.target.value,
    });
  };

  render() {
    const { contactList, search } = this.state;

    return (
      <BrowserRouter>
        <Route exact path="/" render={
          () => <ContactListPage state={this.state} onDeleteContact={this.handleDeleteContact} onSearchContact={this.handleSearchContact} />
        } />
      </BrowserRouter>
    );
  }
}

export default App;
