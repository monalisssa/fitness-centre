import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {createNewWorkout, createNewWorkouts, fetchWorkouts} from "../api/workoutsApi";

export const getAllWorkouts = createAsyncThunk(
    'workouts/getAll',
    async function(id, {rejectWithValue, dispatch}) {
        try {

            fetchWorkouts(id).then(data =>
                dispatch(getAll(data))
            )
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const addNewWorkout = createAsyncThunk(
    'workouts/add',
    async function(workout, {rejectWithValue, dispatch}) {
        try {
            createNewWorkout(workout).then(data =>
                    getAllWorkouts(workout.user_id)

            )
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addNewWorkouts = createAsyncThunk(
    'workouts/add',
    async function(workout, {rejectWithValue, dispatch}) {
        try {
            createNewWorkouts(workout).then(data =>
                getAllWorkouts(workout.user_id)
            )
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}


export const workoutsSlice = createSlice({
    name: 'workouts',
    initialState: {
        workouts: {},
        status: null,
        error: null,
    },
    reducers: {
        getAll(state, action) {
            state.workouts = action.payload;
            state.status = 'completed';
            state.error = null
        },



    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllWorkouts.rejected, setError)


    },
});

export const {  getAll} = workoutsSlice.actions;

export default workoutsSlice.reducer;

