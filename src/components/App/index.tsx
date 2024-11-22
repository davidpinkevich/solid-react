import { ChangeEvent, useState } from "react";

import { usePosts } from "../../hooks/usePosts";
import { Input } from "../Input";
import { Posts } from "../Posts";
import { Loading } from "../Loading";
import { ErrorMessage } from "../ErrorMessage";
import { filterPosts } from "../../helpers/filterPosts";
// import { getPosts } from "../../api/getPostsFetch";
import { getPostsAxios } from "../../api/getPostsAxios";

export const App = () => {
  // Dependency Inversion Principle - передаем любую реальизацию запросов
  // const { posts } = usePosts({ getData: getPosts });
  const { posts, loading, error } = usePosts({ getData: getPostsAxios });
  const [search, setSearch] = useState("");

  const filteredPosts = filterPosts(search, posts);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="app">
      <Input
        view="primary"
        textLabel="Поиск"
        placeholder="Введите текст"
        value={search}
        onChange={handleSearch}
      />
      {!loading && !error && <Posts posts={filteredPosts} />}
      {error && <ErrorMessage error={error} />}
      {loading && <Loading />}
    </div>
  );
};
