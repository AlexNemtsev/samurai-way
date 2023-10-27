import { v1 } from 'uuid';
import { Message } from '../types/Message';
import { Dialog } from '../types/Dialog';
import { PayloadAction } from './PayloadAction';

interface State {
    dialogs: Dialog[];
    messages: Message[];
    newMessageText: string;
}

const SEND_MESSAGE = 'SEND_MESSAGE';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

/* eslint-disable no-case-declarations */
const dialogsReducer = (state: State, action: PayloadAction<string | undefined>): State => {
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

export const sendMessageActionCreator = (): PayloadAction => {
    return {
        type: 'SEND_MESSAGE',
    };
};
export const updNewMessageTextActionCreator = (newText: string): PayloadAction<string> => {
    return {
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        payload: newText,
    };
};

export default dialogsReducer;
