import type { TPost } from "../components/Post/types";
import type { PostsData } from "../types";

// Dependency Inversion Principle
export const getPosts = async (): Promise<TPost[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostsData = await response.json();

  return data.map(({ id, title }) => ({ id, title }));
};
