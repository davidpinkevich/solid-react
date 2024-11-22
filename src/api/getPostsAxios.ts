import type { TPost } from "../components/Post/types";
import type { PostsData } from "../types";
import axios from "axios";

// Dependency Inversion Principle
export const getPostsAxios = async (): Promise<TPost[]> => {
  const { data }: { data: PostsData } = await axios(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data.map(({ id, title }) => ({ id, title }));
};
