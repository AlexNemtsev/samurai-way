import styles from './Navbar.module.css';
import { NavbarItem } from './NavbarItem/NavbarItem';

const navLinks = [
    { text: 'Profile', link: '/profile' },
    { text: 'Messages', link: '/messages' },
    { text: 'News', link: '/news' },
    { text: 'Music', link: '/music' },
    { text: 'Settings', link: '/settings' },
    { text: 'Users', link: '/users' },
];

export const Navbar = () => (
    <nav className={styles.nav}>
        <ul>
            {navLinks.map((navLink) => (
                <NavbarItem text={navLink.text} link={navLink.link} key={navLink.text} />
            ))}
        </ul>
    </nav>
);
