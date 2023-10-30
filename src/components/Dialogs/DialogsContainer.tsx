import {
    updNewMessageTextActionCreator,
    sendMessageActionCreator,
} from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const DialogsContainer = () => {
    const dialogsPage = useAppSelector((state) => state.dialogsPage);

    const dispatch = useAppDispatch();

    const updateNewMessage = (text: string) => {
        dispatch(updNewMessageTextActionCreator(text));
    };

    const sendMessage = () => {
        dispatch(sendMessageActionCreator());
    };

    return (
        <Dialogs
            sendMessage={sendMessage}
            updateNewMessage={updateNewMessage}
            dialogsPage={dialogsPage}
        />
    );
};
