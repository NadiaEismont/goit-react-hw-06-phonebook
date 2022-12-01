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
        },

        deleteContact(state, action) {
            const { id } = action.payload;
            return (state.filter(contact => contact.id !== id));
        }
        // deleteTask(state, action) {
        //     const index = state.findIndex(task => task.id === action.payload);
        //     state.splice(index, 1);
        // },
        // toggleCompleted(state, action) {
        //     for (const task of state) {
        //         if (task.id === action.payload) {
        //             task.completed = !task.completed;
        //             break;
        //         }
        //     }
        // },
    },
});

const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
const tasksReducer = tasksSlice.reducer;