import { sendMessageActionCreator } from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const DialogsContainer = () => {
    const dialogsPage = useAppSelector((state) => state.dialogsPage);

    const dispatch = useAppDispatch();

    const sendMessage = (text: string) => {
        dispatch(sendMessageActionCreator(text));
    };

    return <Dialogs sendMessage={sendMessage} dialogsPage={dialogsPage} />;
};
