import React from 'react';
import '../styles/app.scss';
import dataList from '../data';
import ContactList from './ContactList';

function App() {
  return (
    <div className="view_wrap">
      <h1 className="view_title">Contact List</h1>
      <ContactList list={dataList} />
    </div>
  );
}

export default App;
