import {
    updNewMessageTextActionCreator,
    sendMessageActionCreator,
} from '../../redux/dialogsReducer';
import { Store } from 'redux';
import { Dialogs } from './Dialogs';

interface DialogsContainer {
    store: Store;
}

export const DialogsContainer = ({ store }: DialogsContainer) => {
    const dialogsPage = store.getState().dialogsReducer;

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
