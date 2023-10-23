import styles from './Profile.module.css';
import { MyPosts, MyPostsProps } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export interface ProfileProps extends MyPostsProps {}

export const Profile = (props: ProfileProps) => (
    <div className={styles.content}>
        <ProfileInfo />
        <MyPosts {...props} />
    </div>
);
