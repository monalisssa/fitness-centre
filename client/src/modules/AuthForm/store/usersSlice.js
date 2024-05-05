import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {jwtDecode} from "jwt-decode";
import {
    check,
    editAvatar,
    editUserInf,
    fetchAllUsers,
    fetchEditStatus,
    getInfo,
    login,
    registration
} from "../api/userApi";

export const addNewUser = createAsyncThunk(
    'user/addUser',
    async function(new_user, {rejectWithValue, dispatch}) {
        try {
            const data = await registration(new_user);
            const decodedData = jwtDecode(data);

            await dispatch(addUser(decodedData));
            const userInfo = await getInfo(decodedData.user_id);

            await dispatch(addInfo(userInfo));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const authUser = createAsyncThunk(
    'user/auth',
    async function (user, {rejectWithValue, dispatch}) {
        try {
            const data = await login(user);
            const decodedData = jwtDecode(data);

            await dispatch(auth(decodedData));
            const userInfo = await getInfo(decodedData.user_id);

            await dispatch(addInfo(userInfo));
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);

export const checkUser = createAsyncThunk(
    'user/check',
    async function (token, {rejectWithValue, dispatch}) {
        try {
            const data = await check(token);
            console.log(data)
            dispatch(checkToken(jwtDecode(data)))
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);

export const addUserInfo = createAsyncThunk(
    'user/add_info',
    async function (token, {rejectWithValue, dispatch}) {
        try {
            const data = await check(jwtDecode(token).user_id);
            dispatch(addInfo(data))
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);


export const editUserAvatar = createAsyncThunk(
    'user/edit_avatar',
    async function (avatar, {rejectWithValue, dispatch}) {
        try {
            const data = await editAvatar(avatar)
            dispatch(addInfo(data))
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);

export const editUserInfo = createAsyncThunk(
    'user/edit_info',
    async function (user, {rejectWithValue, dispatch}) {
        try {
            const data = await editUserInf(user)
            dispatch(addInfo(data))
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);


export const getAllUsers = createAsyncThunk(
    'users/get_all',
    async function (_, {rejectWithValue, dispatch}) {
        try {
            const data = await fetchAllUsers()
            dispatch(getAll(data))
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);

export const editUserStatus = createAsyncThunk(
    'users/get_all',
    async function (user, {rejectWithValue, dispatch}) {
        try {
            await fetchEditStatus(user);
            const all_data = await fetchAllUsers()
            dispatch(getAll(all_data))
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}


export const usersSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        user: {},
        status: null,
        error: null,
        all_users: [],
    },
    reducers: {
        auth(state, action) {
            state.token = action.payload;
            state.status = 'auth';
            state.error = null
        },
        addUser(state, action) {
            state.token = action.payload;
            state.status = 'auth';
            state.error = null
        },
        checkToken(state, action)
        {
            state.token = action.payload;
            state.status = 'auth';
            state.error = null
        },

        addInfo(state, action)
        {
            state.user = action.payload;
            state.error = null
        },
        getAll(state, action)
        {
            state.all_users = action.payload;
            state.error = null
        },

        searchUser(state, action) {

            const searchQuery = action.payload;
            state.all_users = state.all_users.filter(user => {
                const { name, email } = searchQuery;

                let user_surname=""
                let user_name= ""
                if (user.surname) user_surname = user.surname.toLowerCase();
                if (user.name) user_name = user.name.toLowerCase();

                const user_email = user.email.toLowerCase();

                const includeStr = user_surname + user_name;
                const conditions = [];

                if (name) {
                    conditions.push(includeStr.includes(name.toLowerCase()));
                }

                if (email) {
                    conditions.push(user_email.includes(email.toLowerCase()));
                }

                return conditions.length === 0 || conditions.every(condition => condition);
            });

        },


        filterUsers(state, action) {
            const filterQuery = action.payload;
            state.all_users = state.all_users.filter(user => user.status === filterQuery)

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authUser.rejected, setError)
            .addCase(addNewUser.rejected, setError)
            .addCase(checkUser.rejected, setError)
            .addCase(addUserInfo.rejected, setError)
            .addCase(editUserAvatar.rejected, setError)
            .addCase(editUserInfo.rejected, setError)
            .addCase(getAllUsers.rejected, setError);
    },
});

export const {addUser, auth, checkToken, addInfo, getAll, searchUser, filterUsers} = usersSlice.actions;

export default usersSlice.reducer;

