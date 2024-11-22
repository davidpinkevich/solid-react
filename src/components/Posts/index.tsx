import { Post } from "../Post";
import { TPosts } from "./types";

// Interface Segregation Principle
export const Posts = ({ posts }: { posts: TPosts | null }) => {
  return (
    <ul className="posts">
      {posts?.map(({ id, title }) => (
        <Post key={id} id={id} title={title} />
      ))}
    </ul>
  );
};
