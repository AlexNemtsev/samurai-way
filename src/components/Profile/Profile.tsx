import styles from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type ProfileProps = Parameters<typeof MyPosts>[0];

export const Profile = (props: ProfileProps) => (
    <div className={styles.content}>
        <ProfileInfo />
        <MyPosts {...props} />
    </div>
);
