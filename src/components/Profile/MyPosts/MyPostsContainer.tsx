import { updNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';
import { MyPosts } from './MyPosts';
import { Store } from 'redux';

interface MyPostsContainePropsProps {
    store: Store;
}

export const MyPostsContainer = ({ store }: MyPostsContainePropsProps) => {
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
