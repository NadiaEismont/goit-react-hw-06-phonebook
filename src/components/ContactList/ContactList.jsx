import { deleteContact } from 'features/contacts/contactsSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonDelete, LabelList, LabelListNumber } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const onClick = id => {
    dispatch(deleteContact(id));
  };
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  return (
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
              onClick={() => onClick(contact.id)}
            >
              Delete
            </ButtonDelete>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
