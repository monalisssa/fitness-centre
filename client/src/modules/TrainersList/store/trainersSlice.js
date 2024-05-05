import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {createNewTrainer, getTrainers} from "../api/trainersApi";

export const getAllTrainers = createAsyncThunk(
    'trainers/getAll',
    async function(_, {rejectWithValue, dispatch}) {
        try {
            getTrainers().then(data =>
                dispatch(getAll(data))
            )
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const addNewTrainer = createAsyncThunk(
    'trainers/add',
    async function(trainer, {rejectWithValue, dispatch}) {
        try {
            createNewTrainer(trainer).then(data =>
                dispatch(addTrainer(data))
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


export const trainersSlice = createSlice({
    name: 'trainers',
    initialState: {
        trainers: [],
        status: null,
        error: null,
    },
    reducers: {
        getAll(state, action) {
            state.trainers = action.payload;
            state.status = 'completed';
            state.error = null
        },

        addTrainer(state, action) {
            state.trainers = [action.payload, ...state.trainers];
            state.status = 'completed';
            state.error = null
        },

        searchTrainerBySurname(state, action) {
            const searchQuery = action.payload.toLowerCase();
            state.trainers = state.trainers.filter(trainer => {
                const surname = trainer.surname.toLowerCase();
                const name = trainer.name.toLowerCase();
                const includeStr = surname + name;
                return includeStr.includes(searchQuery);
            });
        },


        filterTrainers(state, action) {
            const filterQuery = action.payload;
            state.trainers = state.trainers.filter(trainer => {
                const { gender, speciality, experience } = filterQuery;
                const conditions = [];

                if (gender) {
                    conditions.push(trainer.gender === gender);
                }

                if (speciality) {
                    conditions.push(trainer.specialities.some(specialityObj => specialityObj.name === speciality));
                }

                if (experience) {
                    conditions.push(trainer.experience === experience);
                }

                return conditions.length === 0 || conditions.every(condition => condition);
            });
        }



    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllTrainers.rejected, setError)

    },
});

export const { searchTrainerBySurname, filterTrainers, getAll, addTrainer} = trainersSlice.actions;

export default trainersSlice.reducer;

