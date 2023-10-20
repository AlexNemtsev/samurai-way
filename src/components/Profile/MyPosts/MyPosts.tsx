import { PostItem } from './Post/PostItem';
import { Post } from '../../../types/Post';

export interface MyPostsProps {
    posts: Post[];
}

export const MyPosts = ({ posts }: MyPostsProps) => (
    <div>
        <h3>My posts</h3>
        <div>New post</div>
        <textarea></textarea>
        <button>Add post</button>
        <div>
            {posts.map((post) => (
                <PostItem message={post.text} likesCount={post.likes} key={post.id} />
            ))}
        </div>
    </div>
);
