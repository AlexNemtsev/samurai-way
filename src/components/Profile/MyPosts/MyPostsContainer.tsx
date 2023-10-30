import { updNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';
import { useAppDispatch, useAppSelector } from '../../../hooks';

export const MyPostsContainer = () => {
    const profilePage = useAppSelector((state) => state.profilePage);

    const dispatch = useAppDispatch();

    const updateNewPostText = (text: string) => {
        dispatch(updNewPostTextActionCreator(text));
    };

    const addPost = () => {
        dispatch(addPostActionCreator());
    };

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            profilePage={profilePage}
        />
    );
};
