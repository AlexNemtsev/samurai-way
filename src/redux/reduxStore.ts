import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';

const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
});

export const store = createStore(reducers);
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
