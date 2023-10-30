import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
});

export const store = createStore(reducers);
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
