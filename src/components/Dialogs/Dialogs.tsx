import styles from './Dialogs.module.css';
import { MessageItem } from './Message/MessageItem';
import { DialogItem } from './DialogItem/DialogItem';
import { ChangeEvent } from 'react';
import { DialogsState } from '../../types/DialogsState';

interface DialogsProps {
    dialogsPage: DialogsState;
    sendMessage: () => void;
    updateNewMessage: (text: string) => void;
}

export const Dialogs = (props: DialogsProps) => {
    const onInputChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.currentTarget.value;

        props.updateNewMessage(newValue);
    };

    const onBtnClickHandler = () => {
        props.sendMessage();
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
