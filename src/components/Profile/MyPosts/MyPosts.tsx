import { PostItem } from './Post/PostItem';
import { ChangeEvent } from 'react';
import { PostsState } from '../../../types/PostsState';

interface MyPostsProps {
    profilePage: PostsState;
    addPost: () => void;
    updateNewPostText: (text: string) => void;
}

export const MyPosts = (props: MyPostsProps) => {
    const onInputChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.currentTarget.value;

        props.updateNewPostText(newValue);
    };

    const onBtnClickHandler = () => {
        props.addPost();
    };

    return (
        <div>
            <h3>My posts</h3>
            <div>New post</div>
            <textarea value={props.profilePage.newPostText} onChange={onInputChangeHandler} />
            <button onClick={onBtnClickHandler}>Add post</button>
            <div>
                {props.profilePage.posts.map((post) => (
                    <PostItem message={post.text} likesCount={post.likes} key={post.id} />
                ))}
            </div>
        </div>
    );
};
