import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userReducer';
import noteReducer from './noteReducer';

//returns store of redux
const store = configureStore({
    reducer: {
        user: userReducer,
        note: noteReducer
    }

    //state0
});

export default store;