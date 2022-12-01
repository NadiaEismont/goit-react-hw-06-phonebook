import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { NotificationManager } from "react-notifications";


const contactsInitialState = [];

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContacts(state, action) {
            const { name, number } = action.payload;
            if (state.some(contact => contact.name === name)) {
                return NotificationManager.warning(`${name} is already in contacts`);
            }

            return [...state, { id: nanoid(), name, number }];
        },

        deleteContact(state, action) {
            const { id } = action.payload;
            return (state.filter(contact => contact.id !== id));
        }
    },
});

export const { addContacts, deleteContact } = contactsSlice.actions;
