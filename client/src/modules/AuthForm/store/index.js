import { configureStore } from '@reduxjs/toolkit';
import {usersSlice} from "./usersSlice";


export default configureStore({
    reducer: {
        currentUser: usersSlice.reducer,
    },
});