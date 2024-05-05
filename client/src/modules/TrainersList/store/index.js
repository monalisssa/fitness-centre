import { configureStore } from '@reduxjs/toolkit';
import {userSlice} from "./usersSlice";
import {trainersSlice} from "./trainersSlice";
import {commentsSlice} from "./commentsSlice";


export default configureStore({
    reducer: {
        trainers: trainersSlice.reducer,
        comments: commentsSlice.reducer
    },
});