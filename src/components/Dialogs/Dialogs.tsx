import styles from './Dialogs.module.css';
import { MessageItem } from './Message/MessageItem';
import { DialogItem } from './DialogItem/DialogItem';
import { Dialog } from '../../types/Dialog';
import { Message } from '../../types/Message';
import { store } from '../../redux/store';
import { ChangeEvent } from 'react';
import {
    updNewMessageTextActionCreator,
    sendMessageActionCreator,
} from '../../redux/dialogsReducer';

interface DialogsProps {
    dialogsPage: {
        dialogs: Dialog[];
        messages: Message[];
        newMessageText: string;
    };
    dispatch: typeof store.dispatch;
}

export const Dialogs = (props: DialogsProps) => {
    const onInputChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.currentTarget.value;

        props.dispatch(updNewMessageTextActionCreator(newValue));
    };

    const onBtnClickHandler = () => {
        props.dispatch(sendMessageActionCreator());
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {props.dialogsPage.dialogs.map((user) => (
                    <DialogItem userId={user.id} userName={user.userName} key={user.id} />
                ))}
            </div>
            <div className={styles.messages}>
                {props.dialogsPage.messages.map((msg) => (
                    <MessageItem msgText={msg.text} key={msg.id} />
                ))}
                <textarea
                    onChange={onInputChangeHandler}
                    value={props.dialogsPage.newMessageText}
                ></textarea>
                <button onClick={onBtnClickHandler}>Send</button>
            </div>
        </div>
    );
};
