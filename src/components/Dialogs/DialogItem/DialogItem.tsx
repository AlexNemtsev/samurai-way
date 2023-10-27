import styles from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

interface DialogItemProps {
    userId: string;
    userName: string;
}

export const DialogItem = ({ userId, userName }: DialogItemProps) => {
    return (
        <NavLink
            to={`/messages/${userId}`}
            className={styles.item}
            activeClassName={styles.active}
            key={userId}
        >
            {userName}
        </NavLink>
    );
};
