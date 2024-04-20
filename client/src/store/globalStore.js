import {applyMiddleware, combineReducers} from 'redux';
import { createStore } from 'redux';
import {thunk} from "redux-thunk";
import {membershipsSlice} from "../modules/MembershipsList/store/membershipsSlice";
import {trainersSlice} from "../modules/TrainersList/store/trainersSlice";
import {commentsSlice} from "../modules/TrainersList/store/commentsSlice";
import {usersSlice} from "../modules/AuthForm";
import {membersSlice} from "../modules/MembershipsList/store/membersSlice";
import {workoutsSlice} from "../modules/UserAccountDashboard/store/workoutsSlice";


const rootReducer = combineReducers({
    currentUser: usersSlice.reducer,
    memberships: membershipsSlice.reducer,
    trainers: trainersSlice.reducer,
    comments: commentsSlice.reducer,
    members: membersSlice.reducer,
    workouts: workoutsSlice.reducer
});

const store = createStore(
    rootReducer, // корневой редьюсер
    applyMiddleware(thunk)
);

export default store;