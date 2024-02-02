import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPosts } from './MyPosts/MyPosts';

export const Profile = () => (
    <div className={styles.content}>
        <ProfileInfo />
        <MyPosts />
    </div>
);
