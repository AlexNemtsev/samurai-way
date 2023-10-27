import { v1 } from 'uuid';
import { Message } from '../types/Message';
import { Reducer } from 'redux';
import { DialogsState } from '../types/DialogsState';

const initState: DialogsState = {
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

const dialogsReducer: Reducer<DialogsState> = (state = initState, action): DialogsState => {
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
