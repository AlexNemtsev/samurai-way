import { PostItem } from './Post/PostItem';
import { ChangeEvent, useState } from 'react';
import { PostsState } from '../../../redux/profile-reducer';

interface MyPostsProps {
    profilePage: PostsState;
    addPost: (text: string) => void;
}

export const MyPosts = (props: MyPostsProps) => {
    const [newPostText, setNewPostText] = useState('');

    const onInputChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.currentTarget.value;

        setNewPostText(newValue);
    };

    const onBtnClickHandler = () => {
        props.addPost(newPostText);
        setNewPostText('');
    };

    return (
        <div>
            <h3>My posts</h3>
            <div>New post</div>
            <textarea value={newPostText} onChange={onInputChangeHandler} />
            <button onClick={onBtnClickHandler}>Add post</button>
            <div>
                {props.profilePage.posts.map((post) => (
                    <PostItem message={post.text} likesCount={post.likes} key={post.id} />
                ))}
            </div>
        </div>
    );
};
