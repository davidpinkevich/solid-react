import type { TPosts } from "../components/Posts/types";

export const filterPosts = (
  search: string,
  posts: TPosts | null
): TPosts | null => {
  if (posts) {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return null;
};
