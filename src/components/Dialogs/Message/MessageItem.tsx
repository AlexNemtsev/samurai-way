import styles from './Message.module.css';

interface MessageItemProps {
    msgText: string;
}

export const MessageItem = (props: MessageItemProps) => {
    return <div className={styles.message}>{props.msgText}</div>;
};
