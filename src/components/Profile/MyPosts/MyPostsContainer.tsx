import { useContext } from 'react';
import { updNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';
import { StoreContext } from '../../../StoreContext';

export const MyPostsContainer = () => {
    const store = useContext(StoreContext);

    const profilePage = store.getState().profileReducer;

    const updateNewPostText = (text: string) => {
        store.dispatch(updNewPostTextActionCreator(text));
    };

    const addPost = () => {
        store.dispatch(addPostActionCreator());
    };

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            profilePage={profilePage}
        />
    );
};
