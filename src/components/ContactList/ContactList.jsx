import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts,  deleteContact   }) => {
  return (
    <ul className={css.listContact}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.itemContact} key={id}>
          <p className={css.contactName}>
            {name}: {number}
          </p>
          <button
            onClick={() =>  deleteContact(id)}
            className={css.buttonDeleteContact}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact : PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactList;