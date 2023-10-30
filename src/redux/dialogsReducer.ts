import { v1 } from 'uuid';
import { Message } from '../types/Message';
import { Reducer } from 'redux';
import { DialogsState } from '../types/DialogsState';
import { PayloadAction } from './PayloadAction';

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
};

const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer: Reducer<DialogsState> = (
    state = initState,
    action: PayloadAction<string>
): DialogsState => {
    let newMessage: Message;

    switch (action.type) {
        case SEND_MESSAGE:
            newMessage = {
                id: v1(),
                text: action.payload ?? '',
            };

            return { ...state, messages: [...state.messages, newMessage] };

        default:
            return state;
    }
};

export const sendMessageActionCreator = (text: string): PayloadAction<string> => {
    return {
        type: 'SEND_MESSAGE',
        payload: text,
    };
};

export default dialogsReducer;
