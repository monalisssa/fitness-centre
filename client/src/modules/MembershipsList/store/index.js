import { configureStore } from '@reduxjs/toolkit';
import {userSlice} from "./usersSlice";
import {membershipsSlice} from "./membershipsSlice";
import {membersSlice} from "./membersSlice";


export default configureStore({
    reducer: {
        memberships: membershipsSlice.reducer,
        members: membersSlice.reducer

    },
});