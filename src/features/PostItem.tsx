import { Post } from "../models";

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <>
      <div>
        <h2>{post.title}</h2>
      </div>
      <div>
        <p> {post.body}</p>
      </div>
    </>
  );
};

export default PostItem;
