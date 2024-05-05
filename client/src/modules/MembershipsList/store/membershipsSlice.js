import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {jwtDecode} from "jwt-decode";
import {check, fetchAddMembership, getMemberships, login, registration} from "../api/membershipsApi";
import {addUserMember} from "../api/membersApi";

export const getAllMemberships = createAsyncThunk(
    'memberships/getAll',
    async function(_, {rejectWithValue, dispatch}) {
        try {
            getMemberships().then(data =>
                dispatch(getAll(data))
            )
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addMembership = createAsyncThunk(
    'members/add_member',
    async function(membership, {rejectWithValue, dispatch}) {
        try {
            fetchAddMembership(membership).then(data =>
                dispatch(addOneMembership(data))
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


export const membershipsSlice = createSlice({
    name: 'membership',
    initialState: {
        memberships: [],
        status: null,
        error: null,
    },
    reducers: {
        getAll(state, action) {
            state.memberships = action.payload;
            state.status = 'completed';
            state.error = null
        },
        addOneMembership(state, action) {
            state.memberships = [action.payload, ...state.memberships];
            state.status = 'completed';
            state.error = null
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllMemberships.rejected, setError)

    },
});

const {getAll, addOneMembership} = membershipsSlice.actions;

export default membershipsSlice.reducer;

