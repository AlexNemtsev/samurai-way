import styles from './Dialogs.module.css';
import { MessageItem } from './Message/MessageItem';
import { DialogItem } from './DialogItem/DialogItem';
import { ChangeEvent, useState } from 'react';
import { sendMessageActionCreator } from '../../redux/dialogs-reducer';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const Dialogs = () => {
    const [newMessageText, setNewMessageText] = useState('');

    const dialogsPage = useAppSelector((state) => state.dialogsPage);

    const dispatch = useAppDispatch();

    const onInputChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.currentTarget.value;

        setNewMessageText(newValue);
    };

    const onBtnClickHandler = () => {
        dispatch(sendMessageActionCreator(newMessageText));
        setNewMessageText('');
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsPage.dialogs.map((user) => (
                    <DialogItem userId={user.id} userName={user.userName} key={user.id} />
                ))}
            </div>
            <div className={styles.messages}>
                {dialogsPage.messages.map((msg) => (
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
