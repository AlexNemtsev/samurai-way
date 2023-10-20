import styles from './Navbar.module.css';

export const Navbar = () => (
    <nav className={styles.nav}>
        <ul>
            <li className={styles.item}>
                <a href="/profile">Profile</a>
            </li>
            <li className={styles.item}>
                <a href="/messages">Messages</a>
            </li>
            <li className={styles.item}>
                <a href="">News</a>
            </li>
            <li className={styles.item}>
                <a href="">Music</a>
            </li>
            <li className={styles.item}>
                <a href="">Settings</a>
            </li>
        </ul>
    </nav>
);
