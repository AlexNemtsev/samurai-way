import styles from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

type ProfileProps = Parameters<typeof MyPostsContainer>[0];

export const Profile = (props: ProfileProps) => (
    <div className={styles.content}>
        <ProfileInfo />
        <MyPostsContainer {...props} />
    </div>
);
