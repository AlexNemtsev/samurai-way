interface PostItemProps {
    message: string;
    likesCount: number;
}

export const PostItem = (props: PostItemProps) => {
    return (
        <div>
            {props.message}
            <span> likes: {props.likesCount}</span>
        </div>
    );
};
