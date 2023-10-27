import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

export const Profile = () => (
    <div className={styles.content}>
        <ProfileInfo />
        <MyPostsContainer />
    </div>
);
