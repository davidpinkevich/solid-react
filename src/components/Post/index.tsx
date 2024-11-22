import { useState } from "react";

import type { TPost } from "./types";
import { PostTitle } from "./PostTitle";
import { Button } from "./Button";
import img from "../../../public/vite.svg";

export const Post = ({ title, id }: TPost) => {
  // Open Closed Principle
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  return (
    <li>
      <PostTitle title={title} />
      <Button
        onClick={handleClick}
        className={`btn_flex ${checked ? "checked_btn" : "unchecked_btn"}`}
      >
        <div>Click id {id}</div>
        <img src={img} alt="button" />
      </Button>
    </li>
  );
};
