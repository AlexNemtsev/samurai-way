import { useContext } from 'react';
import {
    updNewMessageTextActionCreator,
    sendMessageActionCreator,
} from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';
import { StoreContext } from '../../StoreContext';

export const DialogsContainer = () => {
    const store = useContext(StoreContext);

    const dialogsPage = store.getState().dialogsPage;

    const updateNewMessage = (text: string) => {
        store.dispatch(updNewMessageTextActionCreator(text));
    };

    const sendMessage = () => {
        store.dispatch(sendMessageActionCreator());
    };

    return (
        <Dialogs
            sendMessage={sendMessage}
            updateNewMessage={updateNewMessage}
            dialogsPage={dialogsPage}
        />
    );
};
