import { configureStore } from '@reduxjs/toolkit'
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer();

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer
    }
}, enhancer)
