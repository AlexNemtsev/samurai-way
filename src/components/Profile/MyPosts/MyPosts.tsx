import { PostItem } from './Post/PostItem';
import { ChangeEvent, useState } from 'react';
import { addPostAC } from '../../../redux/profile-reducer';
import { useAppDispatch, useAppSelector } from '../../../hooks';

export const MyPosts = () => {
  const [newPostText, setNewPostText] = useState('');

  const profilePage = useAppSelector((state) => state.profilePage);

  const dispatch = useAppDispatch();

  const onInputChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.currentTarget.value;

    setNewPostText(newValue);
  };

  const onBtnClickHandler = () => {
    dispatch(addPostAC(newPostText));
    setNewPostText('');
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>New post</div>
      <textarea value={newPostText} onChange={onInputChangeHandler} />
      <button onClick={onBtnClickHandler}>Add post</button>
      <div>
        {profilePage.posts.map((post) => (
          <PostItem message={post.text} likesCount={post.likes} key={post.id} />
        ))}
      </div>
    </div>
  );
};
