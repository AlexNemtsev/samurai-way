import { addPostActionCreator } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';
import { useAppDispatch, useAppSelector } from '../../../hooks';

export const MyPostsContainer = () => {
    const profilePage = useAppSelector((state) => state.profilePage);

    const dispatch = useAppDispatch();

    const addPost = (text: string) => {
        dispatch(addPostActionCreator(text));
    };

    return <MyPosts addPost={addPost} profilePage={profilePage} />;
};
