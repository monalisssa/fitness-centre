import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getTrainers} from "../api/trainersApi";
import {addComment, getComments} from "../api/commentsApi";

export const getAllComments = createAsyncThunk(
    'comments/getAll',
    async function(trainer_id, {rejectWithValue, dispatch}) {
        try {
            getComments(trainer_id).then(data =>
                dispatch(getAll(data))
            )
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const addCommentToTrainer = createAsyncThunk(
    'comments/add_comment',
    async function(comment, {rejectWithValue, dispatch}) {
        try {
            addComment(comment).then(data =>
                dispatch(addCommentary(data))
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


export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: null,
        error: null,
    },
    reducers: {
        getAll(state, action) {
            state.comments = action.payload;
            state.status = 'completed';
            state.error = null
        },
        addCommentary(state, action) {
            state.comments = [action.payload, ...state.comments];
            state.status = 'completed';
            state.error = null
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllComments.rejected, setError)

    },
});

export const {getAll, addCommentary} = commentsSlice.actions;

export default commentsSlice.reducer;

