import styles from './NavbarItem.module.css';
import { NavLink } from 'react-router-dom';

interface NavbarItemProps {
  text: string;
  link: string;
}

export const NavbarItem = (props: NavbarItemProps) => {
  return (
    <li className={styles.item}>
      <NavLink to={props.link} activeClassName={styles.active}>
        {props.text}
      </NavLink>
    </li>
  );
};
