import React, { Component } from 'react';
import dataList from '../data';
import ContactList from './ContactList';

import '../styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: dataList,
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

  render() {
    const { contactList } = this.state;
    return (
      <div className="view_wrap">
        <h1 className="view_title">Contact List</h1>
        <ContactList contactList={contactList} onDeleteItem={this.handleDeleteItem} />
      </div>
    );
  }
}

export default App;
