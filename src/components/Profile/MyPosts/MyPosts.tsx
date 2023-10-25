import { PostItem } from './Post/PostItem';
import { Post } from '../../../types/Post';
import { ChangeEvent, createRef } from 'react';
import { addPostActionCreator, store, updNewPostTextActionCreator } from '../../../redux/store';

interface MyPostsProps {
    profilePage: {
        posts: Post[];
        newPostText: string;
    };
    dispatch: typeof store.dispatch;
}

export const MyPosts = (props: MyPostsProps) => {
    const newPostElement = createRef<HTMLTextAreaElement>();

    const onInputChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.currentTarget.value;
        props.dispatch(updNewPostTextActionCreator(newValue));
    };

    const onBtnClickHandler = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div>
            <h3>My posts</h3>
            <div>New post</div>
            <textarea
                ref={newPostElement}
                value={props.profilePage.newPostText}
                onChange={onInputChangeHandler}
            />
            <button onClick={onBtnClickHandler}>Add post</button>
            <div>
                {props.profilePage.posts.map((post) => (
                    <PostItem message={post.text} likesCount={post.likes} key={post.id} />
                ))}
            </div>
        </div>
    );
};
