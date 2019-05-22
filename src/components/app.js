import React, { Component } from 'react';
import dataList from '../data';
import { filterList } from '../utils/index';

import SearchBar from './SearchBar';
import ContactList from './ContactList';

import '../styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: dataList,
      search: '',
    };
  }

  handleDeleteItem = (id) => {
    const { contactList } = this.state;

    const deletedIndex = contactList.findIndex(contact => contact.id === id);
    contactList.splice(deletedIndex, 1);

    this.setState({
      contactList,
    });
  };

  handleSearch = (e) => {
    this.setState({search: e.target.value});
  };

  render() {
    const { contactList, search } = this.state;

    return (
      <div className="view_wrap">
        <h1 className="view_title">Contact List</h1>
        <SearchBar onSearch={this.handleSearch} search={search} />
        <ContactList contactList={filterList(contactList, search)} onDeleteItem={this.handleDeleteItem} />
      </div>
    );
  }
}

export default App;
