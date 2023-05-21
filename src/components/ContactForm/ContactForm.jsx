import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({ addNewContact }) => {
const [name, setName] = useState('');
const [number, setNumber] = useState('');

const handleChange = e => {
if (e.target.name === 'name') {
setName(e.target.value);
} else if (e.target.name === 'number') {
setNumber(e.target.value);
}
};

const handleSubmit = e => {
e.preventDefault();
addNewContact(name, number);
reset();
};

const reset = () => {
setName('');
setNumber('');
};

return (
<form className={css.form} onSubmit={handleSubmit}>
<label className={css.formLabel}>
Name
<input
       placeholder='Enter a name'
       className={css.formInput}
       value={name}
       type="text"
       name="name"
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
       required
       onChange={handleChange}
     />
</label>
<label className={css.formLabel}>
Number
<input 
       placeholder='Enter a number'
       className={css.formInput}
       value={number}
       type="tel"
       name="number"
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       required
       onChange={handleChange}
     />
</label>
<button className={css.formButton} type="submit">
Add contact
</button>
</form>
);
};

ContactForm.propTypes = {
addNewContact: PropTypes.func.isRequired,
};

export default ContactForm;