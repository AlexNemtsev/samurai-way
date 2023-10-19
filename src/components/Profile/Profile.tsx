// import styles from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div>
            <img
                src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg "
                alt="background"
            />
            <div>ava + desc</div>
            <MyPosts />
        </div>
    );
};
