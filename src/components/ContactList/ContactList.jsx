import React from 'react';
import { PropTypes } from 'prop-types';
import { ButtonDelete, LabelList, LabelListNumber } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => (
  <div>
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <LabelList type="text" name="name">
            {contact.name} :
          </LabelList>
          <LabelListNumber
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          >
            {contact.number}
          </LabelListNumber>
          <ButtonDelete
            type="button"
            key={contact.id}
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </ButtonDelete>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
