import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from "./App.module.css"

const App = () => {
const [contacts, setContacts] = useState([{ id: 'id-1', name: 'Go IT', number: '050 366 17 77' }]);
const [filter, setFilter] = useState('');

useEffect(() => {
const storedContacts = localStorage.getItem('contacts');
if (storedContacts) {
setContacts(JSON.parse(storedContacts));
}
}, []);

useEffect(() => {
localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

const addNewContact = (name, number) => {
const newContact = { name, number, id: nanoid() };
const isDuplicateContact = contacts.some(
contact =>
contact.name.toLowerCase() === name.toLowerCase() ||
contact.number === number
);if (isDuplicateContact) {
  alert(`${name} is already in contacts`);
  return;
}

setContacts(prevContacts => [...prevContacts, newContact]);
};

const searchFilter = filter => {
setFilter(filter);
};

const filteredContacts = contacts.filter(contact =>
contact.name.toLowerCase().includes(filter.toLowerCase())
);

const removeContact = id => {
setContacts(prevContacts =>
prevContacts.filter(contact => contact.id !== id)
);
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
<ContactForm addNewContact={addNewContact} />
<h2 className={css.titel}>Contacts</h2>
<Filter searchFilter={searchFilter} />
<ContactList
     contacts={filteredContacts}
     removeContact={removeContact}
   />
</div>
);
};

export default App;