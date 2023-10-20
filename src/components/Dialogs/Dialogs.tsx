import styles from './Dialogs.module.css';
import { MessageItem } from './Message/MessageItem';
import { DialogItem } from './DialogItem/DialogItem';
import { Dialog } from '../../types/Dialog';
import { Message } from '../../types/Message';

export interface DialogsProps {
    dialogs: Dialog[];
    messages: Message[];
}

export const Dialogs = ({ dialogs, messages }: DialogsProps) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogs.map((user) => (
                    <DialogItem userId={user.id} userName={user.userName} />
                ))}
            </div>
            <div className={styles.messages}>
                {messages.map((msg) => (
                    <MessageItem msgText={msg.text} key={msg.id} />
                ))}
            </div>
        </div>
    );
};
