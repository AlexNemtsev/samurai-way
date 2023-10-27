import { v1 } from 'uuid';
import { State } from '../types/State';
import { PayloadAction } from './PayloadAction';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

const initState: State = {
    messagesPage: {
        dialogs: [
            { id: v1(), userName: 'Vasya' },
            { id: v1(), userName: 'Petya' },
            { id: v1(), userName: 'Fedya' },
            { id: v1(), userName: 'Kolya' },
            { id: v1(), userName: 'Sasha' },
        ],
        messages: [
            {
                id: v1(),
                text: 'Hi',
            },
            {
                id: v1(),
                text: 'How are you?',
            },
            {
                id: v1(),
                text: 'Yo',
            },
        ],
        newMessageText: '',
    },
    profilePage: {
        posts: [
            {
                id: v1(),
                text: 'Hi, how are you?',
                likes: 6,
            },
            {
                id: v1(),
                text: "It's my first post",
                likes: 1,
            },
        ],
        newPostText: '',
    },
};

class Store {
    private _state: State;

    constructor(initState: State) {
        this._state = initState;
    }

    private callSubscriber(): void | never {
        throw new Error('Observer not setted! Pass observer to subscribe method');
    }

    get state() {
        return this._state;
    }

    subscribe(observer: () => void) {
        this.callSubscriber = observer;
    }

    dispatch(action: PayloadAction<string | undefined>) {
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this.callSubscriber();
    }
}

export const store = new Store(initState);
