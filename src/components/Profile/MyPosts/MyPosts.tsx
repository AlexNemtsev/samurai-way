import { PostItem } from './Post/PostItem';
import { Post } from '../../../types/Post';
import { ChangeEvent, createRef } from 'react';

export interface MyPostsProps {
    profilePage: {
        posts: Post[];
        newPostText: string;
    };
    addPost: () => void;
    updateNewPostText: (newText: string) => void;
}

export const MyPosts = (props: MyPostsProps) => {
    const newPostElement = createRef<HTMLTextAreaElement>();

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.currentTarget.value;
        props.updateNewPostText(newValue);
    };

    return (
        <div>
            <h3>My posts</h3>
            <div>New post</div>
            <textarea
                ref={newPostElement}
                value={props.profilePage.newPostText}
                onChange={onChangeHandler}
            />
            <button onClick={props.addPost}>Add post</button>
            <div>
                {props.profilePage.posts.map((post) => (
                    <PostItem message={post.text} likesCount={post.likes} key={post.id} />
                ))}
            </div>
        </div>
    );
};
