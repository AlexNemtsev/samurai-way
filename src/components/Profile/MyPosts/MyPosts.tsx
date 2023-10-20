import { Post } from './Post/Post';

export const MyPosts = () => (
    <div>
        my posts <div>New post</div>
        <textarea></textarea>
        <button>Add post</button>
        <div>
            <Post message="Hi, how are you?" likesCount={6} />
            <Post message="It's my first post" likesCount={1} />
        </div>
    </div>
);
