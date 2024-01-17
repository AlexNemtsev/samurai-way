import { v1 } from 'uuid';
import { PayloadAction } from './PayloadAction';

type Dialog = {
    id: string;
    userName: string;
};

type Message = {
    id: string;
    text: string;
};

export type DialogsState = {
    dialogs: Dialog[];
    messages: Message[];
};

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

interface SendMessageAction extends PayloadAction<string> {
    type: 'SEND_MESSAGE';
}

type Action = SendMessageAction;

const dialogsReducer = (state = initState, action: Action): DialogsState => {
    let newMessage: Message;

    switch (action.type) {
        case 'SEND_MESSAGE':
            newMessage = {
                id: v1(),
                text: action.payload ?? '',
            };

            return { ...state, messages: [...state.messages, newMessage] };

        default:
            return state;
    }
};

export const sendMessageActionCreator = (text: string): SendMessageAction => {
    return {
        type: 'SEND_MESSAGE',
        payload: text,
    };
};

export default dialogsReducer;
