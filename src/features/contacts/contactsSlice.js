import { createSlice } from "@reduxjs/toolkit";


const contactsInitialState = [];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContacts(state, action) {
            const { name, number } = action.payload;
            if (state.some(contact => contact.name === name)) {
                return NotificationManager.warning(`${name} is already in contacts`);
            }

            return [...contacts, { id: nanoid(), name, number }];
        }

    },
});

const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
const tasksReducer = tasksSlice.reducer;