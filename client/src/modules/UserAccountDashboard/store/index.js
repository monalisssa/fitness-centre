import { configureStore } from '@reduxjs/toolkit';
import {userSlice} from "./usersSlice";
import {trainersSlice} from "./trainersSlice";
import {commentsSlice} from "./commentsSlice";
import {workoutsSlice} from "./workoutsSlice";


export default configureStore({
    reducer: {
        workouts: workoutsSlice.reducer,
    },
});