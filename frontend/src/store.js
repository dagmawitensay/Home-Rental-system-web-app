import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/auth';
import homeReducer from './slices/homes';
import messagaeReducer from './slices/message';

const reducer = {
    auth: authReducer,
    message: messagaeReducer,
    homes: homeReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true
})

export default store;