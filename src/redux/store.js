import { configureStore } from '@reduxjs/toolkit'
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsSlice } from '../features/contacts/contactsSlice'
import { filterSlice } from '../features/contacts/filterSlice';

const enhancer = devToolsEnhancer();

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    }
}, enhancer)
