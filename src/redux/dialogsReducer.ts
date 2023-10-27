import { v1 } from 'uuid';
import { Message } from '../types/Message';
import { Dialog } from '../types/Dialog';
import { Reducer } from 'redux';

interface State {
    dialogs: Dialog[];
    messages: Message[];
    newMessageText: string;
}

const initState: State = {
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
};

const SEND_MESSAGE = 'SEND_MESSAGE';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

/* eslint-disable no-case-declarations */
const dialogsReducer: Reducer<State> = (state = initState, action): State => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: Message = {
                id: v1(),
                text: state.newMessageText,
            };

            return { ...state, messages: [...state.messages, newMessage], newMessageText: '' };
        case UPDATE_NEW_MESSAGE_TEXT:
            return { ...state, newMessageText: action.payload ?? '' };
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => {
    return {
        type: 'SEND_MESSAGE',
    };
};
export const updNewMessageTextActionCreator = (newText: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        payload: newText,
    };
};

export default dialogsReducer;
