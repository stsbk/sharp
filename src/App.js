import React from 'react';
import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  // const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")));
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const contacts = localStorage.getItem("contacts");
  //   setContacts(JSON.parse(contacts));
  // }, []);

  const addContact = (name, number) => {
    // let contacts = JSON.parse(localStorage.getItem("contacts"));
    // if (contacts === null) contacts = [];
    // const user = { id: uuidv4(), name, number };
    // contacts.push(user);
    // localStorage.setItem("contacts", JSON.stringify(contacts));

    const user = { id: uuidv4(), name, number };
    const isUserNew = contacts.some(item => item.name === name);
    isUserNew
      ? alert(`${name} is already in contacts`)
      : setContacts(state => [...state, user]);
  };

  const addFilterValue = (e) => {
    setFilter(e.target.value);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={addFilterValue} />
      <ContactList contacts={contacts} filter={filter} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
