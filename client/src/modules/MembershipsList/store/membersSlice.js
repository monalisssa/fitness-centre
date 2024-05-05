import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {jwtDecode} from "jwt-decode";
import {check, getMemberships, login, registration} from "../api/membershipsApi";
import {addUserMember, getUserMembers} from "../api/membersApi";


export const addMember = createAsyncThunk(
    'members/add_member',
    async function(member, {rejectWithValue, dispatch}) {
        try {
            let firstData;
            await addUserMember(member).then(data => {
                dispatch(addOne(data));
                firstData = data; // Сохраняем первое значение data
            });
            return firstData;

            // Возвращаем первое значение data
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const getAllUserMembers = createAsyncThunk(
    'members/get_all',
    async function(id, {rejectWithValue, dispatch}) {
        try {
            getUserMembers(id).then(data =>
                dispatch(getAll(data))
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


export const membersSlice = createSlice({
    name: 'members',
    initialState: {
        members: [],
        status: null,
        error: null,
    },
    reducers: {
        getAll(state, action) {
            state.members = action.payload;
            state.status = 'completed';
            state.error = null
        },

        addOne(state, action) {
            state.members = [action.payload, ...state.members];
            state.status = 'completed';
            state.error = null

        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(addMember.rejected, setError)

    },
});

const {getAll, addOne} = membersSlice.actions;

export default membersSlice.reducer;

