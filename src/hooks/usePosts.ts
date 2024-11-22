import { useState, useEffect } from "react";
import { TPosts } from "../components/Posts/types";
import { TPost } from "../components/Post/types";

// Dependency Inversion Principle
export const usePosts = ({ getData }: { getData: () => Promise<TPost[]> }) => {
  const [posts, setPosts] = useState<TPosts | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    getData()
      .then((res) => setPosts(res))
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, [getData]);

  return { posts, loading, error };
};
