import {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from "./App.module.css"

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const enterContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    enterContact
      ? alert(`${name} is already in contact`)
      : setContacts([contact, ...contacts]);
  };

  const changeFilterInput = e => {
    setFilter(e.target.value);
  };

  const findContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setFilter('');
  };


    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '50px',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1 className={css.titel}>Phonebook</h1>
        <ContactForm  onSubmit={formSubmit} />
        <h2 className={css.titel}>Contacts</h2>
        <Filter filter={filter} changeFilterInput={changeFilterInput} />
        <ContactList 
           contacts={findContacts}
           deleteContact={deleteContact}
        />
      </div>
    );
  }

export default App;