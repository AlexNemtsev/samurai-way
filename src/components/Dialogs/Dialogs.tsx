import styles from './Dialogs.module.css';
import { MessageItem } from './Message/MessageItem';
import { DialogItem } from './DialogItem/DialogItem';
import { ChangeEvent, useState } from 'react';
import { DialogsState } from '../../types/DialogsState';

interface DialogsProps {
    dialogsPage: DialogsState;
    sendMessage: (text: string) => void;
}

export const Dialogs = (props: DialogsProps) => {
    const [newMessageText, setNewMessageText] = useState('');

    const onInputChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.currentTarget.value;

        setNewMessageText(newValue);
    };

    const onBtnClickHandler = () => {
        props.sendMessage(newMessageText);
        setNewMessageText('');
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
                    value={newMessageText}
                    placeholder="Enter a message"
                ></textarea>
                <button onClick={onBtnClickHandler}>Send</button>
            </div>
        </div>
    );
};
