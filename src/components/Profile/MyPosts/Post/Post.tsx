interface PostProps {
    message: string;
    likesCount: number;
}

export const Post = (props: PostProps) => {
    return (
        <div>
            {props.message}
            <span>like: {props.likesCount}</span>
        </div>
    );
};
